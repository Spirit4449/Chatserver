// Globals
const key = '1837key';
const mcConsoleAccess = ['100000'] //Nischay, ..

// Express
const express = require("express");
// HTTP
const http = require("http");
const path = require("path");
// SocketIo
const socketIo = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
// Database
const mariadb = require("mariadb");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
// Encryption
const bcrypt = require("bcrypt");
const CryptoJS = require("crypto-js");
// Rate Limits
const rateLimit = require("express-rate-limit");

// Webpack
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("./webpack.config.js");
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/Bundles',
  })
);

app.use(webpackHotMiddleware(compiler));

// Pool
const pool = mariadb.createPool({
  socketPath: "/run/mysqld/mysqld.sock",
  host: "localhost",
  user: "nisch",
  password: "Akshardhamsql",
  database: "classchat",
  connectionLimit: 10,
});

// Session Store
const sessionStore = new MySQLStore(
  {
    expiration: 86400000,
    createDatabaseTable: true,
  },
  pool
);

app.use(express.json());
app.use(require("cookie-parser")());

app.use(
  session({
    name: "ClassChat",
    secret: "Akshardhamsecuresessionstorage183750-0508",
    resave: false,
    saveUninitialized: false,
    //store: sessionStore,
    cookie: {
      secure: false, // Set to true if using HTTPS
      maxAge: 90 * 24 * 60 * 60 * 1000,
    },
    //store: sessionStore,
  })
);

const rateLimitOptions = {
  windowMs: 60 * 1000, // 1 minute
  max: 10, // Max 10 requests per minute per IP address
  message: "You are creating too many rooms! Try again later...",
  keyGenerator: function (req) {
    // Use the client's IP address as the key for rate limiting
    return req.ip;
  },
};

async function executeQuery(query, values) {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query(query, values);
    return result;
  } catch (err) {
    console.error("Database query error:", err);
    throw err; // Handle or propagate the error as needed
  } finally {
    if (conn) {
      conn.release(); // Release the connection back to the pool
    }
  }
}

(async () => {
  try {
    // Test the initial connection to the database
    const testResult = await executeQuery("SELECT 1 as val");
    console.log("Connected to the database");
    server.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (err) {
    console.error("Database connection error:", err);
  }
  const getDatabaseListQuery =
    "SELECT UserID FROM users WHERE MCAccess IS NOT NULL";
  const conn = await pool.getConnection();
  const results = await conn.query(getDatabaseListQuery);
  conn.release();

  const databaseUserIDs = results.map((entry) => entry.UserID);

  const usersToUpdate = databaseUserIDs.filter(
    (userID) => !mcConsoleAccess.includes(String(userID))
  );
  if (usersToUpdate.length > 0) {
    const updateNullQuery =
      "UPDATE users SET MCAccess = NULL WHERE UserID IN (?)";
    const connForUpdate = await pool.getConnection();
    const updateResults = await connForUpdate.query(updateNullQuery, [
      usersToUpdate,
    ]);
    connForUpdate.release();
  }
})();

// Create rate limit middleware for specific routes
const roomCreationLimiter = rateLimit(rateLimitOptions);

app.use(express.static("dist"));
app.use(express.urlencoded({ extended: true }));

const users = {};
const rooms = {};


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "Pages", "Index", "index.html"));
});
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "Pages", "Accounts", "signup.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "Pages", "Accounts", "login.html"));
});
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "Pages", "Home", "home.html"));
});

app.get("/get-rooms", async (req, res) => {
  const userID = req.session.userid;
  const findRooms = "SELECT ChatID from userchats WHERE UserID = ?";

  try {
    const conn = await pool.getConnection();
    const result = await conn.query(findRooms, [userID]);
    conn.release();

    const roomIDs = result.map((row) => row.ChatID);
    if (roomIDs.length === 0) {
      // If the user is not in any chats, return an empty array
      return res.json({ rooms: [] });
    }

    const getChatNamesQuery = "SELECT ChatName FROM chats WHERE ChatID IN (?)";
    const chatNamesResult = await conn.query(getChatNamesQuery, [roomIDs]);
    const chatNames = chatNamesResult.map((chat) => chat.ChatName);
    return res.json({ rooms: chatNames, chats: roomIDs });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/chat", roomCreationLimiter, async (req, res) => {
  const chatName = req.body.name;
  const insertChat = "INSERT INTO chats (ChatName, ChatIcon) VALUES (?, ?)";

  try {
    const conn = await pool.getConnection();
    const result = await conn.query(insertChat, [
      chatName,
      "/dist/assets/Profile Icons/blueProfileIcon.png",
    ]);
    const chatID = Number(result.insertId);
    if (result.affectedRows > 0) {
      const insertedData = await conn.query(
        "SELECT * FROM chats WHERE ChatID = ?",
        [chatID]
      );
      const chatName = insertedData.ChatName;
      const userID = req.session.userid;
      const insertUserChat =
        "INSERT INTO userchats (UserID, ChatID) VALUES (?, ?)";

      try {
        const result = await conn.query(insertUserChat, [userID, chatID]);
        conn.release();

        if (result.affectedRows > 0) {
          return res.status(200).json({ id: chatID, name: chatName });
        } else {
          return res.status(500).json({ error: "Error inserting userchat" });
        }
      } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Error inserting userchat" });
      }
    } else {
      conn.release();
    }
  } catch (err) {
    console.log(err);
    conn.release();
    return res.status(500).json({ error: "Error inserting chat" });
  }
});

app.get("/chat/:chatid", async (req, res) => {
  const referringPage = req.get("Referer") || "/home";
  const chatID = req.params.chatid;
  const userID = req.session.userid;

  let conn;
  try {
    conn = await pool.getConnection();

    // Check if the chat exists
    const checkChat = "SELECT * FROM chats WHERE ChatID = ?";
    const checkResult = await conn.query(checkChat, [chatID]);
    console.log(checkResult);
    if (checkResult.length > 0) {
      const chatName = checkResult[0].ChatName;

      // Check if the user is in the chat
      const checkUserChat = "SELECT ChatID FROM userchats WHERE UserID = ?";
      const userChatResult = await conn.query(checkUserChat, [userID]);
      const chatIDs = userChatResult.map((row) => String(row.ChatID));
      if (chatIDs.includes(chatID)) {
        console.log(`User is in the chat with ChatID: ${chatID}`);
        const encryptedChatID = CryptoJS.AES.encrypt(chatID, key).toString();
        return res.redirect(
          `/Pages/Home/home.html?chatID=${encodeURIComponent(encryptedChatID)}`
        );
      } else {
        res.redirect(referringPage); 
      }
    } else {
      res.redirect(referringPage);
    }
  } catch (error) {
    console.error("Error checking chat: " + error.message);
    return res.status(500).json({ error: "Error getting chat" });
  } finally {
    if (conn) {
      // Release the connection back to the pool
      conn.release();
    }
  }
});

app.get("/getchat/:id", async (req, res) => {
  const endpoint = req.params.id;
  const chatQuery = "SELECT * FROM chats WHERE ChatID = ?";
  const messageQuery = "SELECT * FROM messages WHERE ChatID = ?";

  try {
    const conn = await pool.getConnection();

    // Get chat data
    const chatResults = await conn.query(chatQuery, [endpoint]);
    const chatData = chatResults.length > 0 ? chatResults[0] : null;

    if (chatData) {
      // Get messages for the chat
      const messageResults = await conn.query(messageQuery, [chatData.ChatID]);
      const messages = messageResults;

      const responseData = {
        chatData: chatData,
        messages: messages,
      };

      res.status(200).json(responseData);
    } else {
      res.status(404).json({ error: "Chat data not found" });
    }

    conn.release();
  } catch (err) {
    console.error("Error querying MariaDB for chat and messages:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.post("/check-email", async (req, res) => {
  const encryptedEmail = req.body.email;
  const email = CryptoJS.AES.decrypt(encryptedEmail, key).toString(
    CryptoJS.enc.Utf8
  );

  try {
    const checkEmailQuery = "SELECT Email FROM users WHERE Email = ?";

    const conn = await pool.getConnection();
    const checkResult = await conn.query(checkEmailQuery, [email]);
    conn.release();

    if (checkResult.length > 0) {
      return res.status(204).json({ message: "email already in use" });
    } else {
      return res.status(200).json({ message: "success" });
    }
  } catch (checkErr) {
    console.error("Error checking email: " + checkErr.message);
    return res.status(500).json({ error: "Error checking email" });
  }
});

app.post("/register-user", async (req, res) => {
  const encryptedEmail = req.body.email;
  const encryptedUsername = req.body.username;
  const encryptedPassword = req.body.password;

  const email = CryptoJS.AES.decrypt(encryptedEmail, key).toString(
    CryptoJS.enc.Utf8
  );
  const username = CryptoJS.AES.decrypt(encryptedUsername, key).toString(
    CryptoJS.enc.Utf8
  );
  const password = CryptoJS.AES.decrypt(encryptedPassword, key).toString(
    CryptoJS.enc.Utf8
  );

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Select a random profile icon
    const profileIcons = [
      "redProfileIcon",
      "blueProfileIcon",
      "yellowProfileIcon",
      "greenProfileIcon",
      "purpleProfileIcon",
    ];
    const profileIconIndex = Math.floor(Math.random() * profileIcons.length);
    const profileIcon = `${profileIcons[profileIconIndex]}.png`;

    // Insert user data into the database with a prepared statement
    const insertQuery =
      "INSERT INTO users (Email, Username, Password, ProfileIcon) VALUES (?, ?, ?, ?)";
    const conn = await pool.getConnection();
    const result = await conn.query(insertQuery, [
      email,
      username,
      hashedPassword,
      profileIcon,
    ]);
    conn.release();
    console.log(result);
    if (result && result.affectedRows > 0) {
      const userID = String(result.insertId);
      console.log("User data inserted successfully");
      req.session.userid = userID;
      req.session.username = username;
      req.session.email = email;
      req.session.profileIcon = profileIcon;

      return res
        .status(200)
        .json({
          message: "Inserted user data",
          userID: userID,
          accessCode: generateRandomString(29),
        });
    } else {
      return res.status(500).json({ error: "Error inserting user data" });
    }
  } catch (err) {
    console.error("Error registering user:", err);
    return res.status(500).json({ error: "Error registering user" });
  }
});

app.post("/login-user", async (req, res) => {
  const encryptedEmail = req.body.email;
  const encryptedPassword = req.body.password;

  const email = CryptoJS.AES.decrypt(encryptedEmail, key).toString(
    CryptoJS.enc.Utf8
  );
  const password = CryptoJS.AES.decrypt(encryptedPassword, key).toString(
    CryptoJS.enc.Utf8
  );

  try {
    // Select user data from the database with a prepared statement
    const selectUserQuery = "SELECT * FROM users WHERE Email = ?";
    const conn = await pool.getConnection();
    const results = await conn.query(selectUserQuery, [email]);
    conn.release();

    if (results.length === 0) {
      // User not found
      console.log("Invalid username");
      return res.status(404).json({ message: "Invalid username" });
    }

    const user = results[0];

    // Compare the hashed password using bcrypt
    const isMatch = await bcrypt.compare(password, user.Password);

    if (isMatch) {
      req.session.userid = user.UserID;
      req.session.username = user.Username;
      req.session.email = user.Email;
      req.session.profileIcon = user.ProfileIcon;

      // MC access cookie
      if (req.cookies.mcCode) {
        res.clearCookie("mcCode");
      }
      var accessCode = "";
      if (user.MCAccess) {
        accessCode = user.MCAccess;
      } else if (mcConsoleAccess.includes(String(user.UserID))) {
        const updateStatusQuery =
          "UPDATE users SET MCAccess = ? WHERE UserID = ?";
        const conn = await pool.getConnection();
        accessCode = generateRandomString(30);
        const results = await conn.query(updateStatusQuery, [
          accessCode,
          user.UserID,
        ]);
        conn.release();
      } else {
        accessCode = generateRandomString(29);
      }

      return res
        .status(200)
        .json({ message: "Successfully logged in", accessCode });
    } else {
      // Passwords do not match
      console.log("Invalid password");
      return res.status(404).json({ message: "Invalid password" });
    }
  } catch (err) {
    console.error("Error logging in user:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/profile", (req, res) => {
  // Simulate profile data (replace with data retrieval logic)
  const profileData = {
    id: req.session.userid,
    email: req.session.email,
    username: req.session.username,
    profileIcon: req.session.profileIcon,
  };
  res.json(profileData);
});

app.post("/send-code", (req, res) => {
  const userEmail = req.body.email; // Get the user's email address
  const verificationCode = generateVerificationCode(); // Implement a function to generate a verification code

  const mailOptions = {
    from: "nischaydas510@gmail.com", // Replace with your sender email
    to: userEmail, // Recipient's email address
    subject: "Verification Code",
    text: `Your verification code is: ${verificationCode}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send verification code" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(204).end();
    }
  });
});

io.on("connection", (socket) => {
  socket.on("new-user", (name) => {
    users[socket.id] = name;
    socket.broadcast.emit("user-connected", name);
  });

  socket.on("send-chat-message", async (data) => {
    const {
      id,
      message,
      username,
      profileIcon,
      endpoint,
      timestamp,
      formattedTimestamp,
    } = data;
    const query =
      "INSERT INTO messages (ChatID, UserID, ProfileIcon, Username, Content, DateSent) VALUES (?, ?, ?, ?, ?, ?)";
    try {
      let conn = await pool.getConnection();
      const insertMessage = await conn.query(query, [
        endpoint,
        id,
        profileIcon,
        username,
        message,
        timestamp,
      ]);
      conn.release();
      if (insertMessage.affectedRows > 0) {
        io.emit("chat-message", {
          message: message,
          name: username,
          icon: profileIcon,
          chat: endpoint,
          timestamp: formattedTimestamp,
        });
      }
    } catch (err) {
      console.log("Error inserting message: " + err);
    }
  });

  socket.on("disconnect", () => {
    if (users[socket.id]) {
      socket.broadcast.emit("user-disconnected", users[socket.id]);
      delete users[socket.id];
    }
  });
});

// Functions

function generateVerificationCode() {
  const min = 100000; // Smallest 6-digit number (10^5)
  const max = 999999; // Largest 6-digit number (10^6 - 1)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomString(digits) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < digits; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}
