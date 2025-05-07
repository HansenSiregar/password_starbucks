function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (username === "admin" && password === "admin123") {
      window.location.href = "utama.html";
      message.style.color = "green";
      message.textContent = "Login berhasil. Selamat datang, " + username + "!";
    } 
    else {
      message.style.color = "red";
      message.textContent = "Username atau password salah!";
    }
  }
