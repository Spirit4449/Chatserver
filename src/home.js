import { key } from "../globals";
import { formatChatDate, appendMessage, appendRichMessage, closeSetup } from "./script.js"

var chatDisplay = document.getElementById("chat-display");
const messageContainer = document.getElementById('message-container')
const chatContainer = document.getElementById("chat-container");
const membersList = document.getElementById('members-list')
const membersContainer = document.getElementById('members')
const welcomeMessage = document.getElementById('welcome-message')

const rateLimit = document.getElementById('rate-limit')
const rateLimitMessage = document.getElementById('rate-limit-message');

const darkOverlay = document.getElementById('dark-overlay')

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
      const profilePictureElement =
        document.getElementById("profile-picture");
      profilePictureElement.setAttribute("src", `/assets/Profile Icons/yellowProfileIcon.png`);
    } else {
      window.location.href = "/login";
    }
  });

loadRooms();
setChatBackground();

const createGroupDm = document.getElementById("groupdm-create");

createGroupDm.addEventListener("click", (event) => {
  const label = document.getElementById('chat-name-label')
  const chatNameElement = document.getElementById("chat-name")
  const chatName = chatNameElement.value;
  console.log(chatName);
  if (chatName !== '') {
    const data = {
      name: chatName,
    };
  
    fetch("/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 429) {
          rateLimitMessage.textContent = 'You are creating too many servers. Try again in a few minutes'
          rateLimit.style.display = 'block'
          darkOverlay.style.zIndex = '4'
          throw new Error('Too many requests');
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then((responseData) => {
        const groupDM = document.getElementById('group-dm')
        closeSetup(groupDM)
        label.style.color = '#cdcdcd'
        label.textContent = 'Chat Name'
        chatName.value = ''
        const createdChat = createChatElement(chatName, responseData.id)
        chatContainer.insertBefore(createdChat, chatContainer.firstChild)
        console.log(createdChat)
        redirect(responseData.id, createdChat)
        createdChat.scrollIntoView({ behavior: 'smooth', block: 'center' });
      })
      .catch((error) => {
        console.error("Error creating chat:", error);
      });
  } else {
    label.style.color = '#fa777c'
    label.textContent = 'Chat Name - please provide a name'
  }
  
});

const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  const text = panel.querySelector(".material-symbols-rounded").textContent.toLowerCase();
  if (text === "home") {
    panel.querySelector(".material-symbols-rounded").classList.add("selected");
    const label = panel.querySelector("label");
    if (label) {
      label.classList.add("selected");
    }
  }
});

const branding = document.getElementById("branding");
branding.addEventListener("click", () => {
  window.location.href = "/home";
});
const labels = document.querySelectorAll(".panel label");

panels.forEach((panel, index) => {
  panel.addEventListener("click", function () {
    // Remove the "selected" class from all icons and labels
    document
      .querySelectorAll(".panel .material-symbols-rounded")
      .forEach((icon) => icon.classList.remove("selected"));
    labels.forEach((l) => l.classList.remove("selected"));

    // Add the "selected" class to the clicked icon and label
    panel
      .querySelector(".material-symbols-rounded")
      .classList.add("selected");
    labels[index].classList.add("selected");
  });
});

const person = document.getElementById('person')
person.addEventListener('click', (event) => {
  console.log(membersContainer.style.width);
  if (membersContainer.style.width === '0px') {
    membersContainer.style.width = '18%'
    membersContainer.style.borderLeft = '1px solid #414043';
    person.classList.add('toggled')
  } else {
      membersContainer.style.width = '0'
      membersContainer.style.borderLeft = 'none'
      person.classList.remove('toggled')
    }
});

const rateLimitButton = document.getElementById('rate-limit-button')
rateLimitButton.addEventListener('click', (event) => {
  rateLimit.classList.add('zoomout')
  rateLimit.addEventListener('animationend', function(event) {
    if (event.animationName === 'zoomOut') {
      rateLimit.classList.remove('zoomout')
      rateLimit.style.display = 'none'
      if (document.getElementById('group-dm').style.display === 'block') {
        darkOverlay.style.zIndex = '3'
      } else {
        event.stopPropagation();
        document.getElementById('message-input').focus()
        darkOverlay.style.display = 'none'
      }
    }
  });
});



function loadRooms() {
  fetch("/get-rooms")
    .then((response) => response.json())
    .then((data) => {

      var urlIDNumber;

      if (data.rooms.length === 0) {
        createChat("#2A2A2A");
        createChat("#292929");
        createChat("#282828");
        createChat("#272727");
        createChat("#262626");
        createChat("#252525");
        createChat("#242424");
        createChat("#232323");
        createChat("#1d1d1d");
      } else {
        const urlParams = new URLSearchParams(window.location.search);
        const encryptedUrlID = urlParams.get("chatID");
        if (encryptedUrlID) {
          const urlID = CryptoJS.AES.decrypt(encryptedUrlID, key).toString(
            CryptoJS.enc.Utf8
          );
          urlIDNumber = urlID ? parseInt(urlID, 10) : null;
        }
        data.rooms.forEach((chat, index) => {
          const chatID = data.chats[index];
          const chatElement = createChatElement(chat, chatID);
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

// Create a room element with name, members, and buttons
function createChatElement(chat, chatID) {
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
  chatName.style.overflow = 'hidden'
  chatDiv.appendChild(chatName);

  chatDiv.addEventListener("click", function () {
    redirect(chatID, chatDiv);
  });
  let hoverTimeout
  chatDiv.addEventListener('mouseenter', function() {
    function showHoverDiv() {
      const hoverDiv = document.createElement("div");
      hoverDiv.textContent = chat; 
      hoverDiv.style.position = "absolute";
      hoverDiv.style.background = "#2E2E2E"; 
      hoverDiv.style.color = "#D4D4D4"; 
      hoverDiv.style.padding = "3px 8px"; 
      hoverDiv.style.borderRadius = "10px"; 
      hoverDiv.style.maxWidth = '200px';
      hoverDiv.style.overflowWrap = 'anywhere'
  
      const rect = chatDiv.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const top = rect.top;
  
  
      document.body.appendChild(hoverDiv);
      hoverDiv.style.left = centerX - (hoverDiv.clientWidth/2) + 'px';
      hoverDiv.style.top = top - hoverDiv.clientHeight - 5 + 'px';
      chatDiv.hoverDiv = hoverDiv;
    }
    if (chatName.scrollWidth > chatName.clientWidth) {
      hoverTimeout = setTimeout(showHoverDiv, 1000)
    }
  })
  chatDiv.addEventListener('mouseleave', function() {
    clearTimeout(hoverTimeout)
    if (chatDiv.hoverDiv) {
      chatDiv.hoverDiv.remove();
      chatDiv.hoverDiv = null; // Remove the reference
    }
  })
  chatContainer.addEventListener('scroll', function() {
    if (chatDiv.hoverDiv) {
      chatDiv.hoverDiv.remove();
      chatDiv.hoverDiv = null;
    }
  });
  return chatDiv;
}

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
  if (membersContainer.style.visibility === 'hidden') {
    membersContainer.style.visibility = "visible"
  }
  welcomeMessage.style.visibility = 'hidden'
  
  document.getElementById("no-chat-selected").style.display = "none";

  // Remove all children from chats
  let child = messageContainer.firstElementChild;
  while (child) {
    const nextSibling = child.nextElementSibling;
    if (child.id !== 'welcome-message') {
      messageContainer.removeChild(child);
    }
    child = nextSibling;
  }
  
  // Remove all children from members
  while (membersList.firstChild) {
    membersList.removeChild(membersList.firstChild);
  }

  getChat(chatID);
  getUsers(chatID)
}

// Create a button element with text and click handler
function createButton(text, clickHandler) {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add("chatButton");
  button.addEventListener("click", clickHandler);
  return button;
}


const textarea = document.getElementById("message-input");
const messageInputContainer = document.getElementById('message-input-container')
const messages = document.getElementById('messages')

messageInputContainer.style.height = `${textarea.scrollHeight}px`;

textarea.addEventListener("input", function (event) {
  textarea.style.height = 'auto'; // Reset height to allow it to shrink
  messageInputContainer.style.height = 'auto'; // Reset container height
  const newHeight = `${textarea.scrollHeight}px`; // Get the new height
  const newHeightPercent = parseInt(newHeight) * 100 / messages.clientHeight 


  if (newHeightPercent <= 50) { // Assuming MAX_HEIGHT is the maximum height for messageInputContainer
      textarea.style.height = newHeight; // Set textarea height
      messageInputContainer.style.height = newHeight; // Set container height
  } else {
      textarea.style.height = `${100}%`; // Set textarea to max height
      messageInputContainer.style.height = `${50}%`; // Set container to max height
  }
});



async function getChat(endpoint) {
  let loadingTimer;
  let loading
  // Function to add loading spinner after a delay
  function addLoadingSpinner() {
    loading = document.getElementById('loading')
    loading.style.display = 'block'
    centerElement(loading, messageContainer)
    window.addEventListener('resize', (event) => {
      centerElement(loading, messageContainer)
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
        document.getElementById("welcome-name").textContent = data.chatData.ChatName
        document
          .getElementById("message-input")
          .setAttribute("placeholder", `Message ${data.chatData.ChatName}...`);

        const messagesData = data.messages.map((message) => {
          const username = message.Username || "Unknown";
          const userIcon =
            message.ProfileIcon || "/assets/Profile Icons/unknownProfileIcon.png";
          var dateSent = message.DateSent || "";
          dateSent = updateTimestamp(dateSent);
          return { username, content: message.Content, userIcon, dateSent };
        });


        // Now that all messages are loaded, make the chat container visible
        if (loading) {
          messageContainer.removeChild(loading)
        }
        welcomeMessage.style.visibility = 'visible'

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
        messageContainer.removeChild(loading)
      }
    }

    textarea.focus()
  }
}

async function getUsers(endpoint) {
  fetch(`/get-users/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    const members = data.users
    members.forEach(member => {
      const username = member['Username']
      const profileIcon = member['ProfileIcon']

      const div = document.createElement('div')
      div.classList.add("member")

      const profileIconImage = document.createElement('img')
      profileIconImage.setAttribute("src", `/assets/Profile Icons/${profileIcon}`)
      profileIconImage.classList.add("profile-icon")

      const usernameElement = document.createElement('h6')
      usernameElement.textContent = username

      div.appendChild(profileIconImage)
      div.appendChild(usernameElement)

      membersList.appendChild(div)
  
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function updateTimestamp(text) {
  const currentDate = new Date();
  const formattedCurrentDate = formatChatDate(currentDate);
  const yesterday = new Date(currentDate - 86400000);
  const formattedYesterday = formatChatDate(yesterday);

  const timestampDate = new Date(text.split(" ")[0]);

  const formattedTimestampDate = formatChatDate(timestampDate);

  if (text.split(" ")[0] === formattedCurrentDate.split(" ")[0]) {
    return `Today at ${text.split(" ")[2]}`;
  } else if (text.split(" ")[0] === formattedYesterday.split(" ")[0]) {
    return `Yesterday at ${text.split(" ")[2]}`;
  }

  return text;
}

function centerElement(element, container) {
  let boundingClient = container.getBoundingClientRect();
  let centerX = boundingClient.left + boundingClient.width / 2;
  let centerY = boundingClient.top + boundingClient.height / 2; 

  element.style.left = centerX - element.offsetWidth / 2 + 'px';
  element.style.top = centerY - element.offsetHeight / 2 + 'px';
}

document.fonts.ready.then(() => {
  const icons = document.querySelectorAll(".material-symbols-rounded");
  icons.forEach((icon) => {
    icon.classList.add("font-loaded");
  });
  const outlinedicons = document.querySelectorAll(".material-symbols-outlined");
  outlinedicons.forEach((icon) => {
    icon.style.visibility = "visible";
  });
});

function setChatBackground() {

  // Check if the current URL is "/home"
  if (window.location.pathname === "/home") {
    // Hide the chat header
    chatDisplay.style.visibility = "hidden";
    membersContainer.style.visibility = "hidden"
    const icons = chatDisplay.querySelectorAll(".material-symbols-rounded");
    icons.forEach((icon) => {
      icon.style.visibility = "hidden";
    });
  }
  document.getElementById("no-chat-selected").style.display = "block";
}

function createChat(color) {
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
  h6Element.style.borderRadius = '10px'

  chatElement.appendChild(chatIcon);
  chatElement.appendChild(h6Element);

  document.getElementById("chat-container").appendChild(chatElement);
}

export { updateTimestamp }