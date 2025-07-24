const USERS = {
  "admin": "admin123",
  "user1": "pass1",
  "user2": "pass2"
};

function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (USERS[username] === password) {
    localStorage.setItem("lge_user", username);
    window.location.href = "home.html";
  } else {
    document.getElementById("error").innerText = "Invalid credentials";
  }
}
