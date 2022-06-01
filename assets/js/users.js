//
// var users = [
//     {"name": "Karen", "password": "123"},
//     {"name": "Erick", password: "1234"}
// ]
//

function allUsers(){
    return JSON.parse(window.localStorage.getItem("users"))
}

function validUser(user){
    if(user.id === undefined || user.id === null || user.id === ""){
        alert("id no debe ser nulo o vacio")
        return false;
    }else if(user.name === undefined || user.name === null || user.name === ""){
        alert("name no debe ser nulo o vacio")
        return false;
    }else if(user.password === undefined || user.password === null || user.password === ""){
        alert("password no debe ser nulo o vacio")
        return false;
    }
}

function create(user){
    if(!validUser(user)) return;
    var users = allUsers()
    if(allUsers() != null){
        users.push(user)
        window.localStorage.setItem("users", JSON.stringify(users))
    }else{
        window.localStorage.setItem("users", JSON.stringify([user]))
    }
}

// user = {id: 1, name: "patricio"}
function update(user){
    var users = allUsers();
    users.forEach(element => {
        // element = user
        if(element.id === user.id){
                // Diego     !=  patricio && patricio !== ""  && patricio !== null
            if (element.name != user.name && user.name !== "" && user.name != null){
                element.name = user.name
            }
            if (element.password != user.password && user.password !== "" && user.password != null){
                element.password = user.password
            }
        }
    });
    window.localStorage.setItem("users", JSON.stringify(users))
}

function deleteUser(id){
    var users = allUsers();
    users = users.filter(function(value, index){
        return value.id !== id;
    })
    window.localStorage.setItem("users", JSON.stringify(users))
}

function show(id){
    var users = allUsers();
    var user = null
    users.forEach(function(el){
        if(el.id === id) user = el;
    })
    return user;
}

document.addEventListener("DOMContentLoaded", function(){
    // muestro el arreglo de usuarios como un string
    window.localStorage.clear()
    var users = [
        {id: 1, "name": "Karen", "password": "123"},
        {id: 2, "name": "Erick", password: "1234"}
    ]
    window.localStorage.setItem("users", JSON.stringify(users))
    // console.log("Lista de usuarios", window.localStorage.getItem("users"))
    // // guardo en una variable el arreglo de usuarios como un string
    // var usersStr = window.localStorage.getItem("users")
    // // guardo en una variable el arreglo de usuarios como un JSON
    // var usersJson = JSON.parse(usersStr)
    // // Creo un usuario
    // var jedy = {id: 3, "name": "Jedy", password:"12342352"}
    // create(jedy, allUsers())
    // // muestro el arreglo de los usuarios READ
    // console.log("Muestro usuario agregado", allUsers())
    // //filtro lo que quiero eliminar por id DELETE
    // deleteUser(1, allUsers())
    // console.log("Muestro usuario Eliminado",allUsers())
    // // UPDATE usuario
    // update({id: 3, "name": "Manuel"}, allUsers())
    // console.log("Actualizo usuario", allUsers())
})