// Timer

// Add timer start 

// timeEl.addEventListener('click', function(){
//   let i = 0;
//   let timerId = setInterval(funtion() {
//     console.log('!')
//   }, 1000);
// });

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 11;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage("");
    }

  }, 1000);
}
function sendMessage() {
  timeEl.textContent = "Time's Up!";
}

setTime();

// Build the home screen
// HTML box/template for the javascript content


// Build the question view w/ static data
// Build high score view

// Click to view high scores, show initials/scores



// Write function to show a question based on an index

// Show 5 questions with answers squencially
// Add up andwers as you go
// var playerScore = ;
// var playerTally = "";


// Create an input box for players initials

var formEl = $('#input-form');
var initialsEl = $('input[name="Initials"]');

function handleFormSubmit(event) {
  event.preventDefault();

  console.log('Initials', initialsEl.val());
}
formEl.on('submit', handleFormSubmit);

// track the right and wrong answers, keep the final score
// Add the final score to local storage

// On that page have a "Clear High Scores" button to clear high scores

// Clear all scores in local storage

// Hover on answer boxes

// Show after click if the answer is right or wrong

// Create an array of questions
// QUESTIONS

// "What is JavaScript? (ANSWER = A)"
// "a) JavaScript is a scripting language used to make the website interactive"
// "b) JavaScript is an assembly language used to make the website interactive"
// "c) JavaScript is a compiled language used to make the website interactive"
// "d) None of the mentioned"

// "Which of the following is correct about JavaScript? (ANSWER = A)"
// "a) JavaScript is an Object-Based language"
// "b) JavaScript is Assembly-language"
// "c) JavaScript is an Object-Oriented language"
// "d) JavaScript is a High-level language"

// "Among the given statements, which statement defines closures in JavaScript? (ANSWER = B)"
// "a) JavaScript is a function that is enclosed with references to its inner function scope"
// "b) JavaScript is a function that is enclosed with references to its lexical environment"
// "c) JavaScript is a function that is enclosed with the object to its inner function scope"
// "d) None of the mentioned"

// "Arrays in JavaScript are defined by which of the following statements? (ANSWER = A)"
// "a) It is an ordered list of values"
// "b) It is an ordered list of objects"
// "c) It is an ordered list of string"
// "d) It is an ordered list of functions"

// "Which of the following can be used to call a JavaScript Code Snippet? (ANSWER = A)"
// "a) Function/Method"
// "b) Preprocessor"
// "c) Triggering Event"
// "d) RMI"