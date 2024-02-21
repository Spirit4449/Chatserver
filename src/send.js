import { updateTimestamp, formatChatDate } from "./home";

const socket = io("/");
const messageInput = document.getElementById("message-input");
const messageContainer = document.getElementById("message-container");
const messageInputContainer = document.getElementById(
  "message-input-container"
);
const rateLimit = document.getElementById("rate-limit");
const rateLimitMessage = document.getElementById("rate-limit-message");
const darkOverlay = document.getElementById("dark-overlay");

var username;
var profileIcon;

messageInput.addEventListener("keypress", function (event) {
  if (
    event.key === "Enter" &&
    messageInput.value.trim() !== "" &&
    !event.shiftKey
  ) {
    event.preventDefault();
    send();
  }
});

messageInputContainer.addEventListener("mousedown", function (event) {
  event.preventDefault();
  event.stopPropagation();
  if (messageInput !== document.activeElement) {
    messageInput.focus();
  }
});

const sendButton = document.getElementById("send");
sendButton.addEventListener("click", function () {
  send();
});

function send() {
  fetch("/send-message")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 429) {
        rateLimitMessage.textContent =
          "You are sending too many messages. Try again in a few minutes";
        rateLimit.style.display = "block";
        darkOverlay.style.display = "block";
        messageInput.blur();
        throw new Error("Sending too many messages");
      }
    })
    .then((data) => {
      if (data.email && data.username) {
        let id = data.id;
        username = data.username;
        profileIcon = data.profileIcon;
        if (messageInput.value != "") {
          const message = messageInput.value;
          const chatURL = window.location.href;
          var endpoint = chatURL.split("/").pop();
          var timestamp = new Date().getTime();
          timestamp = formatChatDate(timestamp);
          let formattedTimestamp = updateTimestamp(timestamp);
          socket.emit("send-chat-message", {
            id,
            username,
            message,
            profileIcon,
            endpoint,
            timestamp,
            formattedTimestamp,
          });

          messageInput.value = "";
          messageInput.style.height = "auto"; // Reset height to allow it to shrink
          messageInputContainer.style.height = "auto";
          messageInput.style.height = `${messageInput.scrollHeight}px`; // Expand textarea
          messageInputContainer.style.height = `${messageInput.scrollHeight}px`; // Update container height
        }
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

socket.on("chat-message", (data) => {
  if (data.chat == window.location.href.split("/").pop()) {
    appendRichMessage(data.name, data.message, data.icon, data.timestamp);
  }
});

socket.on("user-connected", (name) => {
  appendMessage(`${name} connected`);
});

socket.on("user-disconnected", (name) => {
  appendMessage(`${name} disconnected`);
});

function appendMessage(message, smooth = true) {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageContainer.append(messageElement);

  if (smooth) {
    messageContainer.scrollTo({
      top: messageContainer.scrollHeight,
      behavior: "smooth",
    });
  } else {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}

function appendRichMessage(name, messagetext, icon, timestamp, smooth = true) {
  const message = document.createElement("div");
  message.classList.add("message");

  // Create profile icon element
  const userIcon = document.createElement("img");
  userIcon.setAttribute("src", `/assets/Profile Icons/${icon}`);
  userIcon.alt = "Profile Icon";
  userIcon.classList.add("profile-icon");
  message.appendChild(userIcon);

  const content = document.createElement("div");
  content.classList.add("message-contents");
  // Create name and date element
  const nameDateElement = document.createElement("div");
  nameDateElement.classList.add("name-date");

  // Name element
  const nameElement = document.createElement("span");
  nameElement.textContent = name;
  nameElement.classList.add("message-name");
  nameDateElement.appendChild(nameElement);

  const dateElement = document.createElement("span");
  dateElement.textContent = timestamp;
  dateElement.classList.add("message-date");
  nameDateElement.appendChild(dateElement);

  content.appendChild(nameDateElement);

  // Create message text element
  const messageTextElement = document.createElement("p");
  messageTextElement.innerText = messagetext;
  messageTextElement.classList.add("message-text");
  content.appendChild(messageTextElement);


  message.append(content);
  messageContainer.appendChild(message);

  if (smooth) {
    messageContainer.scrollTo({
      top: messageContainer.scrollHeight,
      behavior: "smooth",
    });
  } else {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}


export { appendRichMessage, appendMessage }