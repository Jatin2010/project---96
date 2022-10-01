 function addUser(){

    login_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , login_name);
    window.location = "kwitter_room.html" ;

 }