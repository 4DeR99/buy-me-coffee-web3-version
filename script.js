const loginView = document.getElementById("login-view");
const loggedInView = document.getElementById("logged-in-view");
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const userNameSpan = document.getElementById("user-name");
const logoutButton = document.getElementById("logout-button");

function showLoginView() {
  loggedInView.classList.add("hidden");
  loginView.classList.remove("hidden");
}

function showLoggedInView() {
  const username = localStorage.getItem("username") || "Hamid";
  userNameSpan.textContent = username;
  loginView.classList.add("hidden");
  loggedInView.classList.remove("hidden");
}

function checkLoginStatus() {
  //* using local storage for now will change to check if user is logged in with his wallet
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (isLoggedIn) {
    showLoggedInView();
  } else {
    showLoginView();
  }
}

document.addEventListener("DOMContentLoaded", checkLoginStatus);

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  if (username && password) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    showLoggedInView();
    loginForm.reset();
  }
});

logoutButton.addEventListener("click", function () {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  showLoginView();
});
