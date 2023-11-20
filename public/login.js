const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const container = document.querySelector(".container"); // Note the correct selector for the container element


const key = '1837key';

const referrer = document.referrer;



loginForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Validate inputs (you can add more validation as needed)
    if (emailInput.value.trim() === '') {
        emailError.textContent = '- Email is required';
    } else {
        emailError.textContent = ''; // Clear the error message
    }

    if (passwordInput.value.trim() === '') {
        passwordError.textContent = '- Password is required';
    } else {
        passwordError.textContent = ''; // Clear the error message
    }

    // Check if any validation errors occurred
    if (
        emailError.textContent === '' &&
        passwordError.textContent === ''
    ) {
        const encryptedEmail = CryptoJS.AES.encrypt(emailInput.value, key).toString();
        const encryptedPassword = CryptoJS.AES.encrypt(passwordInput.value, key).toString();

        fetch('/login-user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: encryptedEmail,
                password: encryptedPassword
            }),
          })
            .then((response) => {
              if (response.status === 200) {
                console.log(referrer);
                if (referrer.split('/').slice(-1)[0] === 'login' || referrer.split('/').slice(-1)[0] === 'signup') {
                  window.location.href = '/home'
                } else {
                  window.location.href = referrer
                }
              }
              else if (response.status === 404) {
                emailError.textContent = "- Invalid email or password"
                passwordError.textContent = "- Invalid email or password"
              }
              else {

              }
            })

            .catch((error) => {
              console.error('Request failed:', error);
            });
        }
});

function togglePasswordVisibility() {
    const icon = document.getElementById("password-toggle")
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.innerHTML = "visibility"
    } else {
        passwordInput.type = "password";
        icon.innerHTML = "visibility_off"
    }
  }