
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

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    } });  }); }
getData();


    function send() {

          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "" ;
    };
