var firebaseConfig = {
      apiKey: "AIzaSyBMEylNfDgvvhRKw9-Rw4f2h1P2d-gBanc",
      authDomain: "kwitter-c9916.firebaseapp.com",
      databaseURL: "https://kwitter-c9916-default-rtdb.firebaseio.com",
      projectId: "kwitter-c9916",
      storageBucket: "kwitter-c9916.appspot.com",
      messagingSenderId: "102543197505",
      appId: "1:102543197505:web:337540cb5bc83d09cc4dc0"
    };

firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
 }
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}