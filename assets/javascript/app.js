console.log("connected!");
// define global variables for the game
let counterLossesP1 = 0;
let counterWinsP1 = 0;

let counterLossesP2 = 0;
let counterWinsP2 = 0;
let gameCounter = 0;

let playerOneGuess = "";
let playerTwoGuess = "";

//setup the firebase db

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBTK5s8KTxvR4YiuMyS7JfF02QN_eIdfao",
    authDomain: "rps-multiplayer-6f275.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-6f275.firebaseio.com",
    projectId: "rps-multiplayer-6f275",
    storageBucket: "rps-multiplayer-6f275.appspot.com",
    messagingSenderId: "869237844347"
  };
  firebase.initializeApp(config);

  $('#theDiv').prepend('<img id="theImg" src="theImg.png" />')

  $(document).ready(function() {

    $("#rock1").on("click", function() {
        alert("I've been clicked!");
      });
      $("#paper1").on("click", function() {
        alert("I've been clicked!");
      }); 
      $("#scissor1").on("click", function() {
        alert("I've been clicked!");
      });   

  });



