import { redirect } from "./onload";

const chatContainer = document.getElementById("chat-container");
const membersContainer = document.getElementById("members");
const messageInput = document.getElementById('message-input')

const rateLimit = document.getElementById("rate-limit");
const rateLimitMessage = document.getElementById("rate-limit-message");

const chatNameLabel = document.getElementById('chat-name-label')

const darkOverlay = document.getElementById("dark-overlay");

const navbar = document.querySelector(".navbar");
const container = document.querySelector(".content");
const sidebar = document.getElementById("sidebar");

if (navbar && container && sidebar) {
  const navbarHeight = navbar.getBoundingClientRect().height;
  const sidebarWidth = sidebar.getBoundingClientRect().width;
  container.style.height = `calc(99vh - ${navbarHeight}px)`;
  container.style.width = `calc(99vw - ${sidebarWidth}px)`;
}

const create = document.getElementById("create-new");
const createMenu = document.getElementById("create");

create.addEventListener("click", function (event) {
  if (!create.classList.contains("animate-rotate")) {
    event.stopPropagation();
    create.classList.remove("animate-rotate-out");
    // Check if the 'animate-left' class is present
    if (createMenu.classList.contains("animate-left")) {
      createMenu.style.display = "none";
      createMenu.classList.remove("animate-left");
    } else {
      var offsetLeft = create.offsetLeft + create.offsetWidth + 8;
      var buttonBottom = create.offsetTop + create.offsetHeight;
      createMenu.style.left = offsetLeft + "px";
      createMenu.style.bottom = 50 + "px";
      createMenu.style.display = "block";
      createMenu.classList.add("animate-left");
      create.classList.add("animate-rotate");
    }
  }
  window.onclick = function (event) {
    var popup = document.getElementById("create");
    if (
      event.target !== popup &&
      !popup.contains(event.target) &&
      popup.style.display === "block"
    ) {
      closePopup(popup);
    }
  };
});

const createGroupDMButton = document.getElementById("create-group-dm");
createGroupDMButton.addEventListener("click", function (event) {
  event.stopPropagation();
  const createGroupDM = document.getElementById("group-dm");
  createGroupDM.style.display = "block";
  darkOverlay.style.display = "block";
  const chatName = document.getElementById('chat-name')
  chatName.focus();
  closePopup(document.getElementById("create"));
  chatNameLabel.style.color = "#cdcdcd";
  chatNameLabel.textContent = "Chat Name";
  const closeGroupDM = document.getElementById("close-groupdm");
  closeGroupDM.addEventListener("click", function (event) {
    closeSetup(createGroupDM);
    chatNameLabel.style.color = "#cdcdcd";
    chatNameLabel.textContent = "Chat Name";
  });
  window.addEventListener("mousedown", function (event) {
    const groupDMStyles = window.getComputedStyle(createGroupDM);
    const rateLimitStyles = window.getComputedStyle(rateLimit);
    if (
      event.target !== createGroupDM &&
      !createGroupDM.contains(event.target) &&
      groupDMStyles.display === "block" &&
      rateLimitStyles.display === "none"
    ) {
      closeSetup(createGroupDM);
    }
  });
});

const createGroupDm = document.getElementById("groupdm-create");

createGroupDm.addEventListener("click", (event) => {
  const chatNameElement = document.getElementById("chat-name");
  const chatName = chatNameElement.value;
  console.log(chatName);
  if (chatName !== "") {
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
          rateLimitMessage.textContent =
            "You are creating too many servers. Try again in a few minutes";
          rateLimit.style.display = "block";
          darkOverlay.style.zIndex = "4";
          throw new Error("Too many requests");
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((responseData) => {
        const groupDM = document.getElementById("group-dm");
        closeSetup(groupDM);
        chatNameLabel.style.color = "#cdcdcd";
        chatNameLabel.textContent = "Chat Name";
        chatNameElement.value = "";
        const createdChat = createChatElement(chatName, responseData.id);
        chatContainer.insertBefore(createdChat, chatContainer.firstChild);
        console.log(createdChat);
        redirect(responseData.id, createdChat);
        createdChat.scrollIntoView({ behavior: "smooth", block: "center" });
      })
      .catch((error) => {
        console.error("Error creating chat:", error);
      });
  } else {
    chatNameLabel.style.color = "#fa777c";
    chatNameLabel.textContent = "Chat Name - please provide a name";
  }
});

const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  const text = panel
    .querySelector(".material-symbols-rounded")
    .textContent.toLowerCase();
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
    panel.querySelector(".material-symbols-rounded").classList.add("selected");
    labels[index].classList.add("selected");
  });
});

const person = document.getElementById("person");
person.addEventListener("click", (event) => {
  if (membersContainer.style.width === "0px") {
    person.classList.add("toggled");
    membersContainer.style.width = "18%";
    membersContainer.style.borderLeft = "1px solid #414043";
  } else {
    person.classList.remove("toggled");
    membersContainer.style.width = "0";
    membersContainer.style.borderLeft = "none";
  }
});

const rateLimitButton = document.getElementById("rate-limit-button");
rateLimitButton.addEventListener("click", (event) => {
  rateLimit.classList.add("zoomout");
  rateLimit.addEventListener("animationend", function (event) {
    if (event.animationName === "zoomOut") {
      rateLimit.classList.remove("zoomout");
      rateLimit.style.display = "none";
      if (document.getElementById("group-dm").style.display === "block") {
        darkOverlay.style.zIndex = "3";
      } else {
        event.stopPropagation();
        messageInput.focus();
        darkOverlay.style.display = "none";
      }
    }
  });
});

const serverDropdown = document.getElementById("server-options");
serverDropdown.addEventListener("click", function (event) {
  event.preventDefault();
});

const textarea = document.getElementById("message-input");
const messageInputContainer = document.getElementById(
  "message-input-container"
);
const messages = document.getElementById("messages");

messageInputContainer.style.height = `${textarea.scrollHeight}px`;

textarea.addEventListener("input", function (event) {
  textarea.style.height = "auto"; // Reset height to allow it to shrink
  messageInputContainer.style.height = "auto"; // Reset container height
  const newHeight = `${textarea.scrollHeight}px`; // Get the new height
  const newHeightPercent = (parseInt(newHeight) * 100) / messages.clientHeight;

  if (newHeightPercent <= 50) {
    // Assuming MAX_HEIGHT is the maximum height for messageInputContainer
    textarea.style.height = newHeight; // Set textarea height
    messageInputContainer.style.height = newHeight; // Set container height
  } else {
    textarea.style.height = `${100}%`; // Set textarea to max height
    messageInputContainer.style.height = `${50}%`; // Set container to max height
  }
});

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

function closeSetup(popup) {
  popup.classList.add("zoomout");
  popup.addEventListener("animationend", function (event) {
    if (event.animationName === "zoomOut") {
      popup.classList.remove("zoomout");
      popup.style.display = "none";
    }
  });
  darkOverlay.style.display = "none";
}

function closePopup(popup) {
  document.getElementById("chat-name").value = "";
  popup.style.display = "none";
  popup.classList.remove("animate-left");
  var create = document.getElementById("create-new");
  create.classList.remove("animate-rotate");
  create.classList.add("animate-rotate-out");
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

function formatChatDate(timestamp) {
  const currentDate = new Date();
  const messageDate = new Date(timestamp);

  const month = messageDate.getMonth() + 1;
  const day = messageDate.getDate();
  const year = messageDate.getFullYear();
  const hours = messageDate.getHours();
  const minutes = messageDate.getMinutes();
  const period = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Pad minutes with zero if needed

  return `${month}/${day}/${year} at ${formattedHours}:${formattedMinutes}${period}`;
}

function centerElement(element, container) {
  let boundingClient = container.getBoundingClientRect();
  let centerX = boundingClient.left + boundingClient.width / 2;
  let centerY = boundingClient.top + boundingClient.height / 2;

  element.style.left = centerX - element.offsetWidth / 2 + "px";
  element.style.top = centerY - element.offsetHeight / 2 + "px";
}

// Make fonts visible once the document loads to prevent span text showing on reload
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

export { updateTimestamp, centerElement, closeSetup, formatChatDate };
