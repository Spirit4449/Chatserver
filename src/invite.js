const joinButton = document.getElementById("join-button")
let chatid
let username

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
      username = data.username;
      document.getElementById('username').textContent = 'Joining as ' + username
      const profilePicture = data.profileIcon;
    } else {
      window.location.href = "/login";
    }
  });

fetch('/invite', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inviteId: window.location.pathname.split("/").pop() })
})
.then(response => response.json())
.then(data => {
    chatid = data.chat
    if (data.message === "User is already in the chat") {
        joinButton.textContent = "User already joined"
        joinButton.disabled = true
    } else {
        joinButton.addEventListener('click', (event) => {
            fetch('/adduser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ chatid: chatid })
            })
            .then(response => response.json())
            .then(data => {
                window.location.href = '/chat/' + chatid
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }
})
.catch(error => {
    console.error('Error:', error);
});