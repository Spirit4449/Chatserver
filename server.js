const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server)
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const CryptoJS = require('crypto-js');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');
const fs = require('fs')
const MySQLStore = require('express-mysql-session')(session);

const rateLimit = require("express-rate-limit");


const key = '1837key';

app.use(express.json()); 

app.use(cookieParser());
app.use(session({
  name: "ClassChat",
  secret: 'Akshardhamsecuresessionstorage183750-0508',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // Set to true if using HTTPS
  },
}));

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'nischaydas510@gmail.com', // Replace with your Gmail email
    pass: 'Aksharmutka',  // Replace with your Gmail password
  },
});

const rateLimitOptions = {
  windowMs: 60 * 1000, // 1 minute
  max: 3, // Max 10 requests per minute per IP address
  message: "You are creating too many rooms! Try again later...",
  keyGenerator: function (req) {
    // Use the client's IP address as the key for rate limiting
    return req.ip;
  },
};

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Akshardhamsql',
  database: 'classchat',
});

const sessionStore = new MySQLStore({
  expiration: 86400000, // Session expiration time in milliseconds (adjust as needed)
  createDatabaseTable: true, // Automatically create the sessions table (if not exists)
}, db);

db.connect(err => {
  if (err) {
    console.error('Database connection error: ' + err.message);
  } else {
    console.log('Connected to the database'); 
    server.listen(108, () => {
      console.log('Server is running on port 108');
    });
  }
});

// Create rate limit middleware for specific routes
const roomCreationLimiter = rateLimit(rateLimitOptions);

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'Profile Pictures')));
app.use(express.urlencoded({ extended: true }));

const users = {};
const rooms = {};


app.get('/get-rooms', (req, res) => {
  const userID = req.session.userid;
  const findRooms = 'SELECT ChatID from userchats WHERE UserID = ?'
  db.query(findRooms, [userID], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      const roomIDs = result.map(row => row.ChatID);
      if (roomIDs.length === 0) {
        // If the user is not in any chats, return an empty array
        return res.json({ rooms: [] });
      }
      const getChatNamesQuery = 'SELECT Name FROM chats WHERE ChatID IN (?)';
      db.query(getChatNamesQuery, [roomIDs], (err, chatNamesResult) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
        const chatNames = chatNamesResult.map(row => row.Name);
        res.json({ rooms: chatNames, chats: roomIDs });
      });
    }
  })
});

app.post('/chat', roomCreationLimiter, (req, res) => {
  const chatName = req.body.name;
  const insertChat = 'INSERT INTO chats (Name) VALUES (?)';
  db.query(insertChat, [chatName], (insertErr, insertResult) => {
    if (insertErr) {
      console.error('Error inserting chat: ' + insertErr.message);
      return res.status(500).json({ error: 'Error inserting chat' });
    }

    const chatID = insertResult.insertId;
    if (chatID) {
      const insertUserChat = 'INSERT INTO userchats (UserID, ChatID) VALUES (?, ?)';
      db.query(insertUserChat, [req.session.userid, chatID], (err, result) => {
        if (err) {
          console.log('Error inserting into userchats: ' + err)
        } else {
          return res.status(200).json({id: chatID, name: chatName}) // Redirect to the room with the provided room name
        }
      })
    } else {
      return res.status(500).json({message: 'Something went wrong'})
    }
  });
});



// app.get('/chat/:chatid', (req, res) => {
//   console.log("checking /:chatid..")
//   const referringPage = req.get('Referer') || '/home';
//   const chatID = req.params.chatid;

//   const checkChat = 'SELECT * FROM chats WHERE ChatID = ?';
  
//   db.query(checkChat, [chatID], (checkErr, checkResult) => {
//     if (checkErr) {
//       console.error('Error checking chat: ' + checkErr.message);
//       return res.status(500).json({ error: 'Error getting chat' });
//     }

//     if (checkResult.length > 0) {
//       const chatName = checkResult[0].Name;
//       const userID = req.session.userid
//       const checkUserChat = 'SELECT ChatID FROM userchats WHERE UserID = ?';
      
//       db.query(checkUserChat, [userID], (err, result) => {
//         if (err) {
//           console.log('Error: ' + err.message);
//           return res.status(500).json({ error: 'Error checking user chats' });
//         }

//         var chatIDs = result.map(row => row.ChatID);
//         chatIDs = chatIDs.map(String)
//         console.log(chatIDs, typeof chatIDs)

//         if (chatIDs.includes(chatID)) {
//           console.log(`User is in the chat with ChatID: ${chatID}`);
//           return res.status(200).json({id: chatID, name: chatName})
//         } else {
//           res.redirect(referringPage);
//         }
//       });
//     } else {
//       res.redirect(referringPage);
//     } 
//   });
// });


app.get('/getchat/:id', (req, res) => {
  const endpoint = req.params.id;
  const chatQuery = `SELECT * FROM chats WHERE ChatID = ?`;

  db.query(chatQuery, [endpoint], (err, chatResults) => {
    if (err) {
      console.error('Error querying MySQL for chat:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (chatResults.length > 0) {
        const chatData = chatResults[0];
        const messageQuery = `SELECT * FROM messages WHERE ChatID = ?`;

        db.query(messageQuery, [chatData.ChatID], (err, messageResults) => {
          if (err) {
            console.error('Error querying MySQL for messages:', err);
            res.status(500).json({ error: 'Internal Server Error' });
          } else {
            const messages = messageResults;
            const responseData = {
              chatData: chatData,
              messages: messages
            };
            res.status(200).json(responseData);
          }
        });
      } else {
        res.status(404).json({ error: 'Chat data not found' });
      }
    }
  });
});



app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup' + '.html'))
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login' + '.html'))
});
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home' + '.html'))
});



app.post('/check-email', (req, res) => {
  console.log('checking email..');
  const encryptedEmail = req.body.email;
  const email = CryptoJS.AES.decrypt(encryptedEmail, key).toString(CryptoJS.enc.Utf8);

  const checkEmailQuery = 'SELECT Email FROM users WHERE Email = ?';
  db.query(checkEmailQuery, [email], (checkErr, checkResult) => {
    if (checkErr) {
      console.error('Error checking email: ' + checkErr.message);
      return res.status(500).json({ error: 'Error checking email' });
    }

    if (checkResult.length > 0) {
      // Email is already in use
      console.log('Email already in use');
      return res.status(204).json({ message: 'email already in use' });
    } else {
      return res.status(200).json({ message: 'success' });
    }
  });
});




app.post('/register-user', (req, res) => {
  console.log('registering user..');
  const encryptedEmail = req.body.email;
  const encryptedUsername = req.body.username;
  const encryptedPassword = req.body.password;

  const email = CryptoJS.AES.decrypt(encryptedEmail, key).toString(CryptoJS.enc.Utf8);
  const username = CryptoJS.AES.decrypt(encryptedUsername, key).toString(CryptoJS.enc.Utf8);
  const password = CryptoJS.AES.decrypt(encryptedPassword, key).toString(CryptoJS.enc.Utf8);

  const profileIcons = [
    "redProfileIcon",
    "blueProfileIcon",
    "yellowProfileIcon",
    "greenProfileIcon",
    "purpleProfileIcon"
  ];
  const profileIconIndex = Math.floor(Math.random() * profileIcons.length);
  var profileIcon = profileIcons[profileIconIndex]
  profileIcon = `./Profile Icons/${profileIcon}.png`

  // Hash the password
  bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
    // Insert user data into the database with a prepared statement
    const insertQuery = 'INSERT INTO users (Email, Username, Password, ProfileIcon) VALUES (?, ?, ?, ?)';
    db.query(insertQuery, [email, username, hashedPassword, profileIcon], (err, result) => {
      if (err) {
        console.error('Error inserting user data: ' + err.message);
        return res.status(500).json({ error: 'Error inserting user data' });
      } else {
        // Select the user based on the email
        const selectUserQuery = 'SELECT UserID FROM users WHERE Email = ?';
        db.query(selectUserQuery, [email], (selectUserErr, selectUserResult) => {
          if (selectUserErr) {
            console.error('Error selecting user data: ' + selectUserErr.message);
            return res.status(500).json({ error: 'Error selecting user data' });
          } else {
            const userID = selectUserResult[0].UserID;

            console.log('User data inserted successfully');
            req.session.userid = userID;
            req.session.username = username;
            req.session.email = email;
            req.session.profileIcon = profileIcon;

            return res.status(200).json({ message: 'Inserted user data', userID: userID });
          }
        });
      }
    });
  });
});

app.post('/login-user', (req, res) => {
  console.log("logging user in..")
  const encryptedEmail = req.body.email;
  const encryptedPassword = req.body.password;

  const email = CryptoJS.AES.decrypt(encryptedEmail, key).toString(CryptoJS.enc.Utf8);
  const password = CryptoJS.AES.decrypt(encryptedPassword, key).toString(CryptoJS.enc.Utf8);

  const sql = 'SELECT * FROM users WHERE Email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Could not connect to the database' });
    }
    if (results.length === 0) {
      // User not found
      console.log("invalid username")
      return res.status(404).json({ message: 'Invalid username' });
    }
    const user = results[0];
    bcrypt.compare(password, user.Password, (err, isMatch) => {
      if (err) {
        console.log('could not compare password')
        return res.status(500).json({ message: 'Could not compare password' });
      }

      if (isMatch) {
        req.session.userid = user.UserID
        req.session.username = user.Username
        req.session.email = user.Email;
        req.session.profileIcon = user.ProfileIcon;
        return res.status(200).json({ message: 'Successfully logged in' });
      } else {
        // Passwords do not match
        console.log("invalid password")
        return res.status(404).json({ message: 'Invalid password' });
      }
    }); 
  });
});


app.get('/profile', (req, res) => {
  // Simulate profile data (replace with data retrieval logic)
  const profileData = {
    id: req.session.userid,
    email: req.session.email,
    username: req.session.username,
    profileIcon: req.session.profileIcon
  };
  res.json(profileData);
});


app.post('/send-code', (req, res) => {
  const userEmail = req.body.email; // Get the user's email address
  const verificationCode = generateVerificationCode(); // Implement a function to generate a verification code

  const mailOptions = {
    from: 'nischaydas510@gmail.com', // Replace with your sender email
    to: userEmail, // Recipient's email address
    subject: 'Verification Code',
    text: `Your verification code is: ${verificationCode}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send verification code' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(204).end()
    }
  });
});

io.on('connection', socket => {
  socket.on('new-user', name => {
    users[socket.id] = name
    socket.broadcast.emit('user-connected', name);
  });

  socket.on('send-chat-message', data => {
    const { id, message, username, profileIcon, endpoint, timestamp, formattedTimestamp } = data;
    const query = 'INSERT INTO messages (ChatID, UserID, ProfileIcon, Username, Content, DateSent) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [endpoint, id, profileIcon, username, message, timestamp], (err, results) => {
      if (err) {
        console.error('Error saving chat message to database:', err);
      } else {
        io.emit('chat-message', { message, name: username, icon: profileIcon, chat: endpoint, timestamp: formattedTimestamp });
      }
    });
  });

  socket.on('disconnect', () => {
    if (users[socket.id]) {
      socket.broadcast.emit('user-disconnected', users[socket.id]);
      delete users[socket.id];
    }
  });
});

function generateVerificationCode() {
  const min = 100000; // Smallest 6-digit number (10^5)
  const max = 999999; // Largest 6-digit number (10^6 - 1)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}