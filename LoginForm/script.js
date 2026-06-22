if (!localStorage.getItem("username")) {
  localStorage.setItem("username", "admin");
  localStorage.setItem("password", "123456");
}

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    showAlert("Validation Error", "Please fill all fields.");
    return;
  }
  if (username.length < 3) {
    showAlert("Invalid Username", "Username must be at least 3 characters.");
    return;
  }

  if (password.length < 6) {
    showAlert("Weak Password", "Password must be at least 6 characters.");
    return;
  }

  if (
    username === localStorage.getItem("username") &&
    password === localStorage.getItem("password")
  ) {
    showAlert("Login Successful", "Welcome back " + username + "!");
  } else {
    showAlert("Login Failed", "Invalid username or password.");
    document.getElementById("password").value = "";
  }
});
const signupLink = document.getElementById("signupLink");
signupLink.addEventListener("click", function (event) {
  event.preventDefault();
  showAlert("Sign Up", "This button leads to the signup page...");
});

function showAlert(title, message) {
  document.getElementById("alertTitle").innerText = title;
  document.getElementById("alertMessage").innerText = message;

  document.getElementById("customAlert").style.display = "flex";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}
const password = document.getElementById("password");

function togglePassword() {
  const password = document.getElementById("password");
  const eyeIcon = document.querySelector(".eye-icon");

  if (password.type === "password") {
    password.type = "text";
    eyeIcon.textContent = "🙈";
    eyeIcon.classList.add("active");
  } else {
    password.type = "password";
    eyeIcon.textContent = "👁️";
    eyeIcon.classList.remove("active");
  }
}

function openForgotModal() {
  document.getElementById("forgotError").textContent = "";
  document.getElementById("forgotModal").style.display = "flex";
}

function closeForgotModal() {
  document.getElementById("forgotModal").style.display = "none";
}
function updatePassword() {
  const username = document.getElementById("forgotUsername").value.trim();

  const newPassword = document.getElementById("newPassword").value.trim();

  if (username === "") {
    showAlert("Error", "Please enter username.");
    return;
  }

  if (newPassword.length < 6) {
    document.getElementById("forgotError").innerText =
      "Password must be at least 6 characters.";
      docu
    return;
  }

  if (username !== localStorage.getItem("username")) {
    document.getElementById("forgotError").textContent =
        "Username not found.";
    return;
  }
  document.getElementById("forgotError").textContent = "";
  localStorage.setItem("password", newPassword);

  closeForgotModal();

  showAlert("Success", "Password updated successfully.");
}
