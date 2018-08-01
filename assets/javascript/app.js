$(document).ready(function(){

//initialize Firebase
var config = {
    apiKey: "AIzaSyD5286GMsyV_fOKxAik7Sw1E4LXP871ygc",
    authDomain: "train-scheduler-e2f92.firebaseapp.com",
    databaseURL: "https://train-scheduler-e2f92.firebaseio.com",
    projectId: "train-scheduler-e2f92",
    storageBucket: "train-scheduler-e2f92.appspot.com",
    messagingSenderId: "918749438780"
  };
  firebase.initializeApp(config);
  
  
  var database = firebase.database();
//create a button to add new trains
$("#add-train-btn").on("click", function(event){
    event.preventDefault();

//take user's input
var trainName = $("#train-name-input").val().trim();
var destination = $("#destination-input").val().trim();
var firstTrainTime = $("#first-time-input").val().trim();
var frequency = $("#frequency-input").val().trim();

//create a local "temporary" object to hold train info
var newTrain = {
    name: trainName,
    place: destination,
    time: firstTrainTime,
    freq: frequency
};
//update html & database
database.ref().push(newTrain);

//log to the console
console.log(newTrain.name);
console.log(newTrain.place);
console.log(newTrain.time);
console.log(newTrain.freq);

alert("New train is added");
//retrieve trains from database

})
//calculate the next arrival time from the current time and the frequency

//using moment.js formatting to set the next arrival time

//calculate how many minutes until the train comes using the next arrival time and current time
})
