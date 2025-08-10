const { KEY } = process.env;

const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const container = document.querySelector(".container"); // Note the correct selector for the container element
const passwordToggle = document.getElementById("password-toggle");


loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  // Validate inputs (you can add more validation as needed)
  if (emailInput.value.trim() === "") {
    emailError.textContent = "- Email is required";
  } else {
    emailError.textContent = ""; // Clear the error message
  }

  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "- Password is required";
  } else {
    passwordError.textContent = ""; // Clear the error message
  }

  // Check if any validation errors occurred
  if (emailError.textContent === "" && passwordError.textContent === "") {
    const encryptedEmail = CryptoJS.AES.encrypt(
      emailInput.value,
      KEY
    ).toString();
    const encryptedPassword = CryptoJS.AES.encrypt(
      passwordInput.value,
      KEY
    ).toString();

    try {
      const response = await fetch("/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: encryptedEmail,
          password: encryptedPassword,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        if (data.accessCode) {
          createCookie("mcCode", data.accessCode, 90);
        }

        window.location.href = "/home";
      } else if (response.status === 404) {
        emailError.textContent = "- Invalid email or password";
        passwordError.textContent = "- Invalid email or password";
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  }
});

passwordToggle.addEventListener("click", (event) => {
  console.log("hello3");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.innerHTML = "visibility";
  } else {
    passwordInput.type = "password";
    passwordToggle.innerHTML = "visibility_off";
  }
});

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
