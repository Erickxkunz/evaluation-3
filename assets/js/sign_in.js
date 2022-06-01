function signin(username, password){
    var error = true
    allUsers().forEach(user => {
        if(user.name === username && user.password === password) error = false;
    });
    if(error){
        alert("username or password is invalid")
    }else {
        window.localStorage.setItem("username", username)
        window.location.href = "index.html";
    }
}

document.addEventListener("DOMContentLoaded", function(){
    var params = new URLSearchParams(window.location.search)
    var username = params.get("usuario"),
        password = params.get("password");
    if((username !== null && username != undefined) && (password !== null || password !== undefined)){
        signin(username, password);
    }
})