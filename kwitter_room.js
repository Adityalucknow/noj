
var firebaseConfig = {
      apiKey: "AIzaSyCDKdXPd11jru_Qp5corDcw2p3d_cv_Bgc",
      authDomain: "kwitter-e19d6.firebaseapp.com",
      databaseURL: "https://kwitter-e19d6-default-rtdb.firebaseio.com",
      projectId: "kwitter-e19d6",
      storageBucket: "kwitter-e19d6.appspot.com",
      messagingSenderId: "710929140176",
      appId: "1:710929140176:web:271e6e1aa079504dde51d5"
    };
    firebase. initializeApp(firebaseConfig);

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     console.log("Room Name -" + room_names);
     row = "div class='room_name' id="+Room_names+ " onclick='redirectToRoomName(this.id)' >#' </div><hr>";
     document.getElementById("output").innerHTML +=row;

     });});}
getData();

function addRoom()
{
 room_name = document.getElementById("room_name").Value;

 firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
 });

 localStorage.setItem("room_name", room_name);

 window.location = "kwitter_page.html";

}

function redirectToRoomName (name)
{

      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function redirecToRoom(name)
{
      console.log(name);
      localstorage.removeItem("user_name", name);
      window.location = "kwitter_page.html";


}

function  logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}

function send ()
{
      msg = document.getElementById("msg").Value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").Value = "";
}
