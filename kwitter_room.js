
  var firebaseConfig = {
  apiKey: "AIzaSyA4YIIub283AO6Zrsv5fG-CxAbIZ2DGK7I",
  authDomain: "project-kwitter-3e8b1.firebaseapp.com",
  databaseURL: "https://project-kwitter-3e8b1-default-rtdb.firebaseio.com",
  projectId: "project-kwitter-3e8b1",
  storageBucket: "project-kwitter-3e8b1.appspot.com",
  messagingSenderId: "642144314600",
  appId: "1:642144314600:web:f2f1ed4d7af9261940155d"
  };
      
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "WELCOME " + user_name + " !";
  
  function addRoom() {
  
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  purpose:"adding the room"
  });
  localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html";
  
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
    
  
  console.log("room name - " + Room_names);
  row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row ; 
  
        
  });});}
  getData();
  
  function redirectToRoomName(name) {
  
  console.log(name)
  localStorage.setItem("name" , name)
   window.location = "kwitter_page.html";
  
  }
  
