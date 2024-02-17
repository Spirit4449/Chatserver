import { updateTimestamp } from "./home";

const socket = io("/");
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container')


var username
var profileIcon

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar'); 
  const container = document.querySelector('.content');

  if (navbar && container) {
    const navbarHeight = navbar.getBoundingClientRect().height;
    //container.style.marginTop = `${navbarHeight}px`;
    container.style.height = `calc(99vh - ${navbarHeight}px)`;
  }

  messageInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && messageInput.value.trim() !== '' && !event.shiftKey) {
      send();
    }
  });

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
    console.log('button clicked')
    event.stopPropagation();
    const createGroupDM = document.getElementById('group-dm')
    createGroupDM.style.display = 'block'
    const darkOverlayCheck = document.getElementById('dark-overlay')
    if (!darkOverlayCheck) {
      const darkOverlay = document.createElement('div')
      darkOverlay.classList.add('dark-overlay')
      darkOverlay.setAttribute('id', 'dark-overlay')
      createGroupDM.style.left = '50%';
      createGroupDM.style.top = "50%";
      createGroupDM.style.transform = "translate(-50%, -50%)";
      document.body.appendChild(darkOverlay)
    }
    closePopup(document.getElementById("create"));
    const closeGroupDM = document.getElementById('close-groupdm')
    closeGroupDM.addEventListener('click', function (event) {
      closeSetup(createGroupDM);
    })
    window.onclick = function (event) {
      if (event.target !== createGroupDM && !createGroupDM.contains(event.target) && createGroupDM.style.display === 'block') {
        closeSetup(createGroupDM);
      }
    };
  })


  const serverDropdown = document.getElementById('server-options')
  serverDropdown.addEventListener('click', function (event) {
    event.preventDefault()
  })

});

function closeSetup(popup) {
  popup.classList.add('zoomout')
  popup.addEventListener('animationend', function(event) {
    if (event.animationName === 'zoomOut') {
      popup.classList.remove('zoomout')
      popup.style.display = 'none'
      popup.style.transform = "translate(50%, 50%)";
    }
});
  const darkOverlay = document.getElementById('dark-overlay')
  if (darkOverlay) {
    darkOverlay.remove()
  }
}

function closePopup(popup) {
  popup.style.display = "none";
  popup.classList.remove('animate-left');
  var create = document.getElementById('create-new')
  create.classList.remove('animate-rotate');
  create.classList.add('animate-rotate-out');
}

function send() {
  fetch('/profile')
    .then(response => {
      if (response.ok) {
        return response.json();
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

function appendMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messageContainer.append(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

function appendRichMessage(name, messagetext, icon, timestamp) {
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
  messageTextElement.textContent = messagetext;
  messageTextElement.classList.add('message-text');
  content.appendChild(messageTextElement);

  message.append(content)
  messageContainer.appendChild(message);
  messageContainer.scrollTop = messageContainer.scrollHeight;
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