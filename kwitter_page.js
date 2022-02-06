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

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0

          });
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
message_with_tag="<h4>"+ name +"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag ="<h4 calss='message_h4'>"+ "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+ " value="+like+" onclick='updatelike(this.id)' >";
span_with_tag = "<span class='glyphicon glyphicon-tumbs-up'>Like: "+ like + "</span> </button> <hr>";

row  = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;





      } });  }); }
getData();

function updatelike()
{
   console.log("clicked on like button -" + message_id);
   button_id = message_id;
   likes = document.getElementsById(button_id).value;
   update_likes = Number(likes) + 1;
   console.log(update_likes) ; 

firebase.database().ref(room_name).child(message_id).update({
      like : update_likes
});
}


