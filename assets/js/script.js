// Implement a timer

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 11;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage(" ");
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = "Time's Up!";
  // var imgEl = document.createElement("img");
  // imgEl.setAttribute("src", "images/image_1.jpg");
  // mainEl.appendChild(imgEl);

}

setTime();


// Build the home screen
    // HTML box/template for the javascript content
    // Create an input box for players initials
// Build the question view w/ static data
// Build high score view
    // js
// Link things together 
    // Click to view high scores, show questions
// Create an array of questions
// Write function to show a question based on an index
// Show 5 questions with answers squencially
// Keep the finals score of the quiz
    // js
    // Have a page that shows high scores
// On that page have a clear button to clear high schools
// Add the final score to local storage
// Clear all scores in local storage

// Hover on answer boxes
// Show after click if the answer is right or wrong
// track the right and wrong answers 
// Track with score