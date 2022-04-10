
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCHXpFxXccMHEn9JgqipNE2TXjp9ke7NBA",
      authDomain: "c-95-project-13ff8.firebaseapp.com",
      databaseURL: "https://c-95-project-13ff8-default-rtdb.firebaseio.com",
      projectId: "c-95-project-13ff8",
      storageBucket: "c-95-project-13ff8.appspot.com",
      messagingSenderId: "259665888761",
      appId: "1:259665888761:web:1d6a8541abb17380ee6928"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    

    user_name = localStorage.getItem("user_name");
    document.getElementById("user").innerHTML = "Welcome " + user_name + "  !" ;

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
            purpose : "adding the room"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>" 
      document.getElementById("output").innerHTML += row ;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}


