const firebaseConfig = {
      apiKey: "AIzaSyCHLQvs63RO5cpl9RfASBxqpvkjKf4ngEE",
      authDomain: "kwitter-769ea.firebaseapp.com",
      databaseURL: "https://kwitter-769ea-default-rtdb.firebaseio.com",
      projectId: "kwitter-769ea",
      storageBucket: "kwitter-769ea.appspot.com",
      messagingSenderId: "82837211362",
      appId: "1:82837211362:web:074e957b451385582e36bb"
    };
    
   
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome"+ user_name + "!";

    function addroom() 
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html";
    }
  

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log ("Room_Name" + Room_names );
      row = "<div class ='room_name' id="+ Room_names +" onclick ='redirectToRoomName(this.id)'>"+ Room_names +"</div> <hr> ";
      document.getElementById("output").innerHTML += row;
      });
      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
