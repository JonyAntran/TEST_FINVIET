let username = document.getElementById("username");
let password = document.getElementById("password");
let btnSignup = document.querySelector(".btn-signup");
let btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,

    password: password.value,
  };
  let json = JSON.stringify(user);
  if (!username.value || !password.value) {
    alert("vui long nhap day du thong tin");
  } else {
    localStorage.setItem(username.value, json);
    alert("dang nhap thanh cong");
    window.location.href = "profile.html";
  }
});


