const buttonSubmit = document.getElementById("submit");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const inputPassword = document.getElementById("password");

  if (inputPassword.type == "password") {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
});

buttonSubmit.addEventListener("click", () => {
  const inputUsername = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;

  if (inputUsername == "ahmad2017" && inputPassword == "integrity") {
    alert("Login berhasil");
    window.location.href = "home.html";
  } else {
    alert("Username atau password salah.");
  }
});
