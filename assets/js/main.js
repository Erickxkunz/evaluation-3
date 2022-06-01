document.addEventListener("DOMContentLoaded", function(){
    var username = window.localStorage.getItem("username");
    if (username === null || username === undefined || username === "") window.location.href = "login.html";
    document.getElementById("username").innerHTML = username;
    document.getElementById("sign_out").addEventListener("click", function(){
      alert("Cerrando sesión")
      window.localStorage.setItem("username", null);
      window.location.href = "login.html"
    })
})