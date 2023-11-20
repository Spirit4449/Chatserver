var chatDisplay = document.getElementById('chat-display')
var chatHTML

document.addEventListener('DOMContentLoaded', () => {
  fetch('/profile')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to retrieve profile data');
        }
      })
      .then(data => {
        if (data.email && data.username) {
          const userEmail = data.email;
          const username = data.username;
          const profilePicture = data.profileIcon;
          const profilePictureElement = document.getElementById('profile-picture')
          profilePictureElement.setAttribute('src', `/${profilePicture}`)
        } else {
          window.location.href = "/login"
        }
      })

      loadRooms()
      setChatBackground();
      const createForm = document.getElementById('create-form');

      createForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const chatInput = document.getElementById('chat-name');
        const chatText = chatInput.value;
        
        const data = {
          name: chatText
        }
        console.log(data);

        fetch('/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              //throw new Error(`Failed to create chat. Status: ${response.status}`);
            }
          })
          .then(responseData => {
            console.log(responseData);
            history.pushState(null, null, `/chat/${responseData.id}`);
            chatDisplay.innerHTML = chatHTML

          })
          .catch(error => {
            console.error('Error creating chat:', error);
          });
    });
  });



function loadRooms() {
  console.log('getting rooms');
  fetch('/get-rooms')
    .then((response) => response.json())
    .then((data) => {
      const chatContainer = document.getElementById('chat-container');
      chatContainer.innerHTML = ''

      if (data.rooms.length === 0) {
        const noRoomsMessage = document.createElement('p');
        noRoomsMessage.textContent = 'Start a conversation by clicking the new button';
        noRoomsMessage.style.textAlign = 'center';
        chatContainer.appendChild(noRoomsMessage);
      } else {
        data.rooms.forEach((chat, index) => {
          const chatID = data.chats[index]
          const chatElement = createChatElement(chat, chatID);
          chatContainer.appendChild(chatElement);
        });
      }
    })
    .catch((error) => console.error('Error loading rooms:', error));
}

// Create a room element with name, members, and buttons
function createChatElement(chat, chatID) {
  const chatDiv = document.createElement('div');
  chatDiv.classList.add('chat');

  // Server Icon
  const serverIcon = document.createElement('img');
  serverIcon.setAttribute("src", "/./Profile Icons/redProfileIcon.png");
  serverIcon.classList.add('chat-icon')
  chatDiv.appendChild(serverIcon);

  const chatName = document.createElement('h6');
  chatName.textContent = chat;
  chatDiv.appendChild(chatName);

  chatDiv.setAttribute('onclick', `redirect('/chat/${chatID}')`)
  return chatDiv;
}

function redirect(chatID) {
  window.location.href = `${chatID}`;
}

// Create a button element with text and click handler
function createButton(text, clickHandler) {
  const button = document.createElement('button');
  button.textContent = text;
  button.classList.add('chatButton')
  button.addEventListener('click', clickHandler);
  return button;
}

// Call the function to load rooms when the page loads
//window.addEventListener('load', loadRooms);
document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => {
    const text = panel.querySelector('.material-symbols-rounded').textContent.toLowerCase();
    if (text === 'home') {
      panel.querySelector(".material-symbols-rounded").classList.add("selected");
      label = panel.getElementsByTagName("label")
      if (label.length = 1) {
        label[0].classList.add("selected")
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {

  const branding = document.getElementById('branding')
  //branding.setAttribute('onclick', `redirect('/home')`)

  const panels = document.querySelectorAll(".panel");
  const labels = document.querySelectorAll(".panel label");

  panels.forEach((panel, index) => {
    panel.addEventListener("click", function () {
      // Remove the "selected" class from all icons and labels
      document.querySelectorAll(".panel .material-symbols-rounded").forEach((icon) => icon.classList.remove("selected"));
      labels.forEach((l) => l.classList.remove("selected"));

      // Add the "selected" class to the clicked icon and label
      panel.querySelector(".material-symbols-rounded").classList.add("selected");
      labels[index].classList.add("selected");
    });
  });
});


document.addEventListener("DOMContentLoaded", async function () {
  // Check if the URL contains "chat"
  if (window.location.href.includes("chat")) {
    // Extract the endpoint from the URL
    const endpoint = window.location.href.split("/").pop();

    try {
      const response = await fetch(`/getchat/${endpoint}`);

      if (response.ok) {
        const data = await response.json();
        chatDisplay.innerHTML = chatHTML
        console.log(chatHTML);
        document.getElementById('chat-name-header').textContent = data.chatData.Name;
        document.getElementById('message-input').setAttribute('placeholder', `Message ${data.chatData.Name}...`);

        const messagesData = data.messages.map((message) => {
          const username = message.Username || 'Unknown';
          const userIcon = message.ProfileIcon || './Profile Icons/unknownProfileIcon.png';
          var dateSent = message.DateSent || '';
          dateSent = updateTimestamp(dateSent)
          return { username, content: message.Content, userIcon, dateSent };
        });

        // Now that all messages are loaded, make the chat container visible
        messageContainer.style.visibility = 'visible';

        for (const messageData of messagesData) {
          appendRichMessage(messageData.username, messageData.content, messageData.userIcon, messageData.dateSent);
        }
      } else {
        // If there's an error with the main chat data fetch, make the chat container visible
        messageContainer.style.visibility = 'visible';
      }
    } catch (error) {
      console.error('Error fetching chat data:', error);
      // If there's an error with the main chat data fetch, make the chat container visible
      messageContainer.style.visibility = 'visible';
    }
  }
});

 



function appendRichMessage(name, messagetext, icon, timestamp) {
  const message = document.createElement('div');
  message.classList.add('message');

  // Create profile icon element
  const userIcon = document.createElement('img');
  userIcon.setAttribute('src', `.${icon}`);
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

function updateTimestamp(text) {
  const currentDate = new Date();
  const formattedCurrentDate = formatChatDate(currentDate);
  const yesterday = new Date(currentDate - 86400000);
  const formattedYesterday = formatChatDate(yesterday);

  const timestampDate = new Date(text.split(' ')[0]);

  const formattedTimestampDate = formatChatDate(timestampDate);

  if (text.split(' ')[0] === formattedCurrentDate.split(' ')[0]) {
    return `Today at ${text.split(' ')[2]}`;
  } else if (text.split(' ')[0] === formattedYesterday.split(' ')[0]) {
    return `Yesterday at ${text.split(' ')[2]}`;
  }

  return text;
}

document.fonts.ready.then(() => {
  const icons = document.querySelectorAll('.material-symbols-rounded')
  icons.forEach((icon) => {
    icon.classList.add('font-loaded');
  })
  const outlinedicons = document.querySelectorAll('.material-symbols-outlined')
  outlinedicons.forEach((icon) => {
    icon.style.visibility = 'visible'
  })
});

function setChatBackground() {
  const chatHeader = document.getElementById('chat-header');

  // Check if the current URL is "/home"
  if (window.location.pathname === '/home') {
    // Hide the chat header
    chatDisplay.style.visibility = 'hidden'
    icon = document.getElementById('icon')
    icons = chatDisplay.querySelectorAll('.material-symbols-rounded')
    icons.forEach((icon) => {
      icon.style.visibility = 'hidden'
    })
  }
}