import { updateTimestamp, centerElement } from "./home";
import { appendRichMessage, appendMessage } from "./send";
const { KEY } = process.env

const chatDisplay = document.getElementById("chat-display");
const messageContainer = document.getElementById("message-container");
const membersList = document.getElementById("members-list");
const welcomeMessage = document.getElementById("welcome-message");
const chatContainer = document.getElementById("chat-container");
const membersContainer = document.getElementById("members");

// Get profile data
fetch("/profile")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to retrieve profile data");
    }
  })
  .then((data) => {
    if (data.email && data.username) {
      const userEmail = data.email;
      const username = data.username;
      const profilePicture = data.profileIcon;
      const profilePictureElement = document.getElementById("profile-picture");
      profilePictureElement.setAttribute(
        "src",
        `/assets/Profile Icons/${profilePicture}`
      );
    } else {
      window.location.href = "/login";
    }
  });

loadRooms();
setChatBackground();

// Onload functions
function loadRooms() {
  fetch("/get-rooms")
    .then((response) => response.json())
    .then((data) => {
      var urlIDNumber;

      if (data.rooms.length === 0) {
        // Create enough blank chats to fill up most of the chat element
        // To do - create a function that can calculate how many blank chats to create
        createBlankChat("#2A2A2A");
        createBlankChat("#292929");
        createBlankChat("#282828");
        createBlankChat("#272727");
        createBlankChat("#262626");
        createBlankChat("#252525");
        createBlankChat("#242424");
        createBlankChat("#232323");
        createBlankChat("#1d1d1d");
      } else {
        const urlParams = new URLSearchParams(window.location.search);
        const encryptedUrlID = urlParams.get("chatID");
        if (encryptedUrlID) {
          const urlID = CryptoJS.AES.decrypt(encryptedUrlID, KEY).toString(
            CryptoJS.enc.Utf8
          );
          urlIDNumber = urlID ? parseInt(urlID, 10) : null;
        }
        data.rooms.forEach((chat, index) => {
          const chatID = data.chats[index];
          const chatElement = createBlankChatElement(chat, chatID);
          chatContainer.appendChild(chatElement);

          if (urlIDNumber === chatID) {
            const selectedChat = document.getElementById(`${chatID}`);
            // Check if chatID is present and call the redirect function
            if (chatID && selectedChat) {
              redirect(chatID, selectedChat);
            }
          }
        });
        if (window.location.search.includes("chatID")) {
          // If so, change the URL to /home
          history.pushState(null, null, "/home");
        }
      }
    })
    .catch((error) => console.error("Error loading rooms:", error));
}

function createBlankChatElement(chat, chatID) {
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat");
  chatDiv.setAttribute("id", `${chatID}`);
  // Server Icon
  const serverIcon = document.createElement("img");
  serverIcon.setAttribute("src", `/assets/Profile Icons/greenProfileIcon.png`);
  serverIcon.classList.add("chat-icon");
  chatDiv.appendChild(serverIcon);

  const chatName = document.createElement("h6");
  chatName.textContent = chat;
  chatName.style.overflow = "hidden";
  chatDiv.appendChild(chatName);

  chatDiv.addEventListener("click", function () {
    redirect(chatID, chatDiv);
  });
  let hoverTimeout;
  chatDiv.addEventListener("mouseenter", function () {
    function showHoverDiv() {
      const hoverDiv = document.createElement("div");
      hoverDiv.textContent = chat;
      hoverDiv.style.position = "absolute";
      hoverDiv.style.background = "#2E2E2E";
      hoverDiv.style.color = "#D4D4D4";
      hoverDiv.style.padding = "3px 8px";
      hoverDiv.style.borderRadius = "10px";
      hoverDiv.style.maxWidth = "200px";
      hoverDiv.style.overflowWrap = "anywhere";

      const rect = chatDiv.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const top = rect.top;

      document.body.appendChild(hoverDiv);
      hoverDiv.style.left = centerX - hoverDiv.clientWidth / 2 + "px";
      hoverDiv.style.top = top - hoverDiv.clientHeight - 5 + "px";
      chatDiv.hoverDiv = hoverDiv;
    }
    if (chatName.scrollWidth > chatName.clientWidth) {
      hoverTimeout = setTimeout(showHoverDiv, 1000);
    }
  });
  chatDiv.addEventListener("mouseleave", function () {
    clearTimeout(hoverTimeout);
    if (chatDiv.hoverDiv) {
      chatDiv.hoverDiv.remove();
      chatDiv.hoverDiv = null; // Remove the reference
    }
  });
  chatContainer.addEventListener("scroll", function () {
    if (chatDiv.hoverDiv) {
      chatDiv.hoverDiv.remove();
      chatDiv.hoverDiv = null;
    }
  });
  return chatDiv;
}

function createBlankChat(color) {
  var chatElement = document.createElement("div");
  chatElement.className = "chat";
  chatElement.style.pointerEvents = "none";

  var chatIcon = document.createElement("img");
  chatIcon.src = "/assets/transparentimage.png";
  chatIcon.className = "chat-icon";
  chatIcon.style.width = "35px";
  chatIcon.style.height = "35px";
  chatIcon.style.backgroundColor = color;

  var h6Element = document.createElement("h6");
  h6Element.textContent = "none";
  h6Element.style.color = "transparent";
  h6Element.style.backgroundColor = color;
  h6Element.style.userSelect = "none";
  h6Element.style.pointerEvents = "none";
  h6Element.style.borderRadius = "10px";

  chatElement.appendChild(chatIcon);
  chatElement.appendChild(h6Element);

  document.getElementById("chat-container").appendChild(chatElement);
}

// Dynamic javasciprt when choosing chats
function redirect(chatID, chatDiv) {
  const selectionItems = document.querySelectorAll(".chat");
  selectionItems.forEach((item) => {
    item.classList.remove("selected");
  });

  // Select the clicked item
  chatDiv.classList.add("selected");

  history.pushState(null, null, `/chat/${chatID}`);
  chatDisplay.style.visibility = "visible";
  const icons = chatDisplay.querySelectorAll(".material-symbols-rounded");
  icons.forEach((icon) => {
    icon.style.visibility = "visible";
  });
  if (membersContainer.style.visibility === "hidden") {
    membersContainer.style.visibility = "visible";
  }
  welcomeMessage.style.visibility = "hidden";
  document.getElementById("no-chat-selected").style.display = "none";

  // Remove all children from chats
  let child = messageContainer.firstElementChild;
  while (child) {
    const nextSibling = child.nextElementSibling;
    if (child.id !== "welcome-message") {
      messageContainer.removeChild(child);
    }
    child = nextSibling;
  }

  // Remove all children from members
  while (membersList.firstChild) {
    membersList.removeChild(membersList.firstChild);
  }

  getChat(chatID);
  getUsers(chatID);
}

async function getChat(endpoint) {
  let loadingTimer;
  let loading;
  // Function to add loading spinner after a delay
  function addLoadingSpinner() {
    loading = document.getElementById("loading");
    loading.style.display = "block";
    centerElement(loading, messageContainer);
    window.addEventListener("resize", (event) => {
      centerElement(loading, messageContainer);
    });
  }

  // Start a timer to add loading spinner after 500 milliseconds
  loadingTimer = setTimeout(addLoadingSpinner, 700);
  if (window.location.href.includes("chat")) {
    try {
      const response = await fetch(`/getchat/${endpoint}`);

      if (response.ok) {
        clearTimeout(loadingTimer);
        const data = await response.json();
        document.getElementById("chat-name-header").textContent =
          data.chatData.ChatName;
        document.getElementById("welcome-name").textContent =
          data.chatData.ChatName;
        document
          .getElementById("message-input")
          .setAttribute("placeholder", `Message ${data.chatData.ChatName}...`);
        document.getElementById('invite-header').textContent = 'Invite friends to ' + data.chatData.ChatName

        const messagesData = data.messages.map((message) => {
          const username = message.Username || "Unknown";
          const userIcon =
            message.ProfileIcon ||
            "/assets/Profile Icons/unknownProfileIcon.png";
          var dateSent = message.DateSent || "";
          dateSent = updateTimestamp(dateSent);
          return { username, content: message.Content, userIcon, dateSent };
        });

        // Now that all messages are loaded, make the chat container visible
        if (loading) {
          messageContainer.removeChild(loading);
        }
        welcomeMessage.style.visibility = "visible";

        for (const messageData of messagesData) {
          appendRichMessage(
            messageData.username,
            messageData.content,
            messageData.userIcon,
            messageData.dateSent,
            false
          );
        }
      } else {
        // If there's an error with the main chat data fetch, make the chat container visible
        if (loading) {
        }
      }
    } catch (error) {
      console.error("Error fetching chat data:", error);
      // If there's an error with the main chat data fetch, make the chat container visible
      if (loading) {
        messageContainer.removeChild(loading);
      }
    }

    document.getElementById('message-input').focus();
  }
}

async function getUsers(endpoint) {
  fetch(`/get-users/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const members = data.users;
      members.forEach((member) => {
        const username = member["Username"];
        const profileIcon = member["ProfileIcon"];

        const div = document.createElement("div");
        div.classList.add("member");

        const profileIconImage = document.createElement("img");
        profileIconImage.setAttribute(
          "src",
          `/assets/Profile Icons/${profileIcon}`
        );
        profileIconImage.classList.add("profile-icon");

        const usernameElement = document.createElement("h6");
        usernameElement.textContent = username;

        div.appendChild(profileIconImage);
        div.appendChild(usernameElement);

        membersList.appendChild(div);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function setChatBackground() {
  // Check if the current URL is "/home"
  if (window.location.pathname === "/home") {
    // Hide the chat header
    chatDisplay.style.visibility = "hidden";
    membersContainer.style.visibility = "hidden";
    const icons = chatDisplay.querySelectorAll(".material-symbols-rounded");
    icons.forEach((icon) => {
      icon.style.visibility = "hidden";
    });
    document.getElementById("no-chat-selected").style.display = "block";
  }
}

export { redirect };
