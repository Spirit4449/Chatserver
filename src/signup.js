import { key } from "../globals";

const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const container = document.getElementById("container");
const submitButton = document.getElementById("submit");
const header = document.getElementById("header");
const smallText = document.getElementById("small-text");
const verificationForm = document.getElementById("verification-form");
const signupGroup = document.querySelectorAll(".form-group");
const passwordToggle = document.getElementById('password-toggle')

signupForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  // Validate inputs (you can add more validation as needed)
  if (emailInput.value.trim() === "") {
    emailError.textContent = "- Email is required";
  } else if (!validateEmail(emailInput.value)) {
    emailError.textContent = "- Invalid email";
  } else {
    emailError.textContent = ""; // Clear the error message
  }

  if (usernameInput.value.trim() === "") {
    usernameError.textContent = "- Username is required";
  } else {
    usernameError.textContent = ""; // Clear the error message
  }

  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "- Password is required";
  } else {
    passwordError.textContent = ""; // Clear the error message
  }

  // Check if any validation errors occurred
  if (
    emailError.textContent === "" &&
    usernameError.textContent === "" &&
    passwordError.textContent === ""
  ) {
    const encryptedEmail = CryptoJS.AES.encrypt(
      emailInput.value,
      key
    ).toString();
    const encryptedUsername = CryptoJS.AES.encrypt(
      usernameInput.value,
      key
    ).toString();
    const encryptedPassword = CryptoJS.AES.encrypt(
      passwordInput.value,
      key
    ).toString();
    // url = '/check-email?email=' + encodeURIComponent(encryptedEmail) + '&username=' + encodeURIComponent(encryptedUsername) + '&password=' + encodeURIComponent(encryptedPassword);
    // window.location.href = url
    fetch("/check-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: encryptedEmail,
      }),
    })
      .then((response) => {
        if (response.status === 204) {
          console.log("email in use");
          emailError.textContent = "- Email already in use";
        } else {
          // send email here
          //animateContainer(emailInput.value, usernameInput.value, passwordInput.value);
          // check if the verification code matches here
          register(encryptedEmail, encryptedUsername, encryptedPassword);
        }
      })
      .catch((error) => {
        console.error("Request failed:", error);
      });
  }
});

// Function to validate email format (you can use a more robust validation)
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Send a request to the new route when needed
function sendVerificationCodeEmail(email) {
  fetch("/send-code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then(() => {
      console.log("code sent");
    })
    .catch((error) => {
      console.error("Request failed:", error);
    });
}

passwordToggle.addEventListener('click', (event) => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.innerHTML = "visibility";
  } else {
    passwordInput.type = "password";
    passwordToggle.innerHTML = "visibility_off";
  }
});


function animateContainer(email, username, password) {
  console.log("animating");
  const currentHeight = container.clientHeight;
  let transitionsEnded = 0;
  signupGroup.forEach((signupElement) => {
    signupElement.classList.add("animate-out");
    signupElement.addEventListener("transitionend", () => {
      transitionsEnded++;
      if (transitionsEnded === signupGroup.length) {
        container.removeChild(signupForm);
        addVerificationForm(email, username, password);
      }
    });
  });
}

function addVerificationForm(email, username, password) {
  console.log("adding verification form");
  const verification = document.createElement("div");
  const instructions = document.createElement("p");
  instructions.textContent = `Enter the 6-digit verification code sent to `;

  const emailLabel = document.createElement("span");
  emailLabel.textContent = email; // Replace with the actual email
  emailLabel.style.color = "#39cc6f";
  instructions.appendChild(emailLabel);

  instructions.style.textAlign = "left";
  instructions.style.fontSize = "15px";

  const verificationGroup = document.createElement("div");
  verificationGroup.classList.add("form-group");

  const verificationInput = document.createElement("input");
  verificationInput.setAttribute("type", "number");
  verificationInput.setAttribute("id", "verification-code");
  verificationInput.setAttribute("name", "verification-code");
  verificationInput.setAttribute("placeholder", "Enter your verification code");

  const verifyButton = document.createElement("button");
  verifyButton.setAttribute("type", "submit");
  verifyButton.setAttribute("id", "verify");
  verifyButton.setAttribute("id", "verify");
  verifyButton.textContent = "Verify";

  function registerClick() {
    register(email, username, password, verificationInput.value);
  }
  verifyButton.onclick = registerClick;

  verificationGroup.appendChild(verificationInput);
  verificationGroup.appendChild(verifyButton);

  verification.appendChild(instructions);
  verification.appendChild(verificationGroup);
  verification.setAttribute("id", "verification");
  verification.setAttribute("class", "verification-group");

  // Add the verification group to the form
  verificationForm.insertBefore(
    verification,
    document.querySelector(".verification-group:last-child")
  );

  header.textContent = "Verification";
  smallText.textContent = "Back to sign up";
  smallText.removeAttribute("href");

  smallText.onclick = goBackPage;
}

async function register(email, username, password) {
  try {
    const response = await fetch("/register-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      if (data.accessCode) {
        createCookie("mcCode", data.accessCode, 90);
      }

      console.log("Registration successful");
      window.location.href = "/home";
    } else {
      console.error("Registration failed. Status:", response.status);
      // You might want to handle other HTTP status codes here
    }
  } catch (error) {
    console.error("Request failed:", error);
    // Handle other errors that may occur during the fetch
  }
}

function goBackPage() {
  verification = document.getElementById("verification");
  verification.classList.add("animate-out");
  verification.addEventListener("transitionend", function () {
    verification.remove();
    header.textContent = "Sign Up";
    smallText.textContent = "Already have an account?";
    smallText.href = "login";
    container.insertBefore(signupForm, smallText);
    signupGroup.forEach((element) => {
      element.classList.remove("animate-out");
    });
  });
}

function createCookie(name, value, daysToExpire) {
  var expires = "";

  if (daysToExpire) {
    var date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  if (window.location.hostname.includes("classchats.net")) {
    document.cookie =
      name + "=" + value + expires + "; domain=.classchats.net; path=/";
  } else {
    document.cookie = name + "=" + value + expires + "; path=/";
  }
}
