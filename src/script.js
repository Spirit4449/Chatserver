import { updateTimestamp } from "./home";

const socket = io("/");
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container')
const messageInputContainer = document.getElementById('message-input-container')
const rateLimit = document.getElementById('rate-limit')
const rateLimitMessage = document.getElementById('rate-limit-message');
const darkOverlay = document.getElementById('dark-overlay')

var username
var profileIcon

const navbar = document.querySelector('.navbar'); 
const container = document.querySelector('.content');
const sidebar = document.getElementById('sidebar')

if (navbar && container && sidebar) {
  const navbarHeight = navbar.getBoundingClientRect().height;
  const sidebarWidth = sidebar.getBoundingClientRect().width;
  container.style.height = `calc(99vh - ${navbarHeight}px)`;
  container.style.width = `calc(99vw - ${sidebarWidth}px)`
}

messageInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter' && messageInput.value.trim() !== '' && !event.shiftKey) {
    event.preventDefault();
    send();
  }
});

messageInputContainer.addEventListener('mousedown', function(event) {
  event.preventDefault();
  event.stopPropagation();
  if (messageInput !== document.activeElement) {
    messageInput.focus();
  }
})

const create = document.getElementById('create-new');
const createMenu = document.getElementById('create');

create.addEventListener('click', function (event) {
  if (!(create.classList.contains('animate-rotate'))) {
    event.stopPropagation();
    create.classList.remove('animate-rotate-out')
    // Check if the 'animate-left' class is present
    if (createMenu.classList.contains('animate-left')) {
      createMenu.style.display = "none";
      createMenu.classList.remove('animate-left');
    } else {
      var offsetLeft = create.offsetLeft + create.offsetWidth + 8;
      var buttonBottom = create.offsetTop + create.offsetHeight;
      createMenu.style.left = offsetLeft + "px";
      createMenu.style.bottom = 50 + "px";
      createMenu.style.display = "block";
      createMenu.classList.add('animate-left');
      create.classList.add('animate-rotate')
    }
  }
  window.onclick = function (event) {
    var popup = document.getElementById("create");
    if (event.target !== popup && !popup.contains(event.target) && popup.style.display === 'block') {
      closePopup(popup);
    }
  };
});

const createGroupDMButton = document.getElementById('create-group-dm')
createGroupDMButton.addEventListener('click', function (event) {
  const label = document.getElementById('chat-name-label');
  console.log('button clicked')
  event.stopPropagation();
  const createGroupDM = document.getElementById('group-dm')
  createGroupDM.style.display = 'block'
  darkOverlay.style.display = 'block'
  document.getElementById('chat-name').focus()
  closePopup(document.getElementById("create"));
  label.style.color = '#cdcdcd'
  label.textContent = 'Chat Name'
  const closeGroupDM = document.getElementById('close-groupdm')
  closeGroupDM.addEventListener('click', function (event) {
    closeSetup(createGroupDM);
    label.style.color = '#cdcdcd'
    label.textContent = 'Chat Name'
  })
  window.addEventListener('mousedown', function(event) {
    const groupDMStyles = window.getComputedStyle(createGroupDM)
    const rateLimitStyles = window.getComputedStyle(rateLimit)
    if (event.target !== createGroupDM && !createGroupDM.contains(event.target) && groupDMStyles.display === 'block' && rateLimitStyles.display === 'none') {
      closeSetup(createGroupDM);
    }
  });
})

const sendButton = document.getElementById('send')
sendButton.addEventListener('click', function() {
  send()
})


const serverDropdown = document.getElementById('server-options')
serverDropdown.addEventListener('click', function (event) {
  event.preventDefault()
})


function closeSetup(popup) {
  popup.classList.add('zoomout')
  popup.addEventListener('animationend', function(event) {
    if (event.animationName === 'zoomOut') {
      popup.classList.remove('zoomout')
      popup.style.display = 'none'
    }
});
  darkOverlay.style.display = 'none'
}

function closePopup(popup) {
  document.getElementById('chat-name').value = ''
  popup.style.display = "none";
  popup.classList.remove('animate-left');
  var create = document.getElementById('create-new')
  create.classList.remove('animate-rotate');
  create.classList.add('animate-rotate-out');
}

function send() {
  fetch('/send-message')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 429) {
          rateLimitMessage.textContent = 'You are sending too many messages. Try again in a few minutes'
          rateLimit.style.display = 'block'
          darkOverlay.style.display = 'block'
          messageInput.blur()
          throw new Error("Sending too many messages");
      }
    })
    .then(data => {
      if (data.email && data.username) {
        let id = data.id;
        username = data.username;
        profileIcon = data.profileIcon;
        if (messageInput.value != "") {
          const message = messageInput.value;
          const chatURL = window.location.href;
          var endpoint = chatURL.split("/").pop();
          var timestamp = new Date().getTime();
          timestamp = formatChatDate(timestamp)
          let formattedTimestamp = updateTimestamp(timestamp)
          socket.emit('send-chat-message', { id, username, message, profileIcon, endpoint, timestamp, formattedTimestamp });

          messageInput.value = '';
          messageInput.style.height = 'auto'; // Reset height to allow it to shrink
          messageInputContainer.style.height = 'auto'
          messageInput.style.height = `${messageInput.scrollHeight}px`; // Expand textarea
          messageInputContainer.style.height = `${messageInput.scrollHeight}px`; // Update container height
        }
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

socket.on('chat-message', data => {
  if (data.chat == window.location.href.split("/").pop()) {
    appendRichMessage(data.name, data.message, data.icon, data.timestamp);
  }
});

socket.on('user-connected', name => {
  appendMessage(`${name} connected`);
});

socket.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`);
});

function appendMessage(message, smooth=true) {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messageContainer.append(messageElement);

  if (smooth) {
    messageContainer.scrollTo({
      top: messageContainer.scrollHeight,
      behavior: 'smooth'
    });
  } else {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
  

}

function appendRichMessage(name, messagetext, icon, timestamp, smooth=true) {
  const message = document.createElement('div');
  message.classList.add('message');

  // Create profile icon element
  const userIcon = document.createElement('img');
  userIcon.setAttribute('src', `/assets/Profile Icons/${icon}`);
  userIcon.alt = 'Profile Icon';
  userIcon.classList.add('profile-icon');
  message.appendChild(userIcon);

  const content = document.createElement('div')
  content.classList.add('message-contents')
  // Create name and date element
  const nameDateElement = document.createElement('div');
  nameDateElement.classList.add('name-date');

  // Name element
  const nameElement = document.createElement('span');
  nameElement.textContent = name;
  nameElement.classList.add('message-name');
  nameDateElement.appendChild(nameElement);

  const dateElement = document.createElement('span');
  dateElement.textContent = timestamp;
  dateElement.classList.add('message-date');
  nameDateElement.appendChild(dateElement);

  content.appendChild(nameDateElement);


  // Create message text element
  const messageTextElement = document.createElement('p');
  messageTextElement.innerText = messagetext;
  messageTextElement.classList.add('message-text');
  content.appendChild(messageTextElement);

  message.append(content)
  messageContainer.appendChild(message);

  if (smooth) {
    messageContainer.scrollTo({
      top: messageContainer.scrollHeight,
      behavior: 'smooth'
    });
  } else {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
  
}

function formatChatDate(timestamp) {
  const currentDate = new Date();
  const messageDate = new Date(timestamp);

  const month = messageDate.getMonth() + 1;
  const day = messageDate.getDate();
  const year = messageDate.getFullYear();
  const hours = messageDate.getHours();
  const minutes = messageDate.getMinutes();
  const period = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Pad minutes with zero if needed

  return `${month}/${day}/${year} at ${formattedHours}:${formattedMinutes}${period}`;
}


export { formatChatDate, appendRichMessage, appendMessage, closeSetup }