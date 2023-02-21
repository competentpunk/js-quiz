// Questions Array
var qarray = [
  {
    question: "What is JavaScript?",
    answers: [
      "a) JavaScript is a scripting language used to make the website interactive",
      "b) JavaScript is an assembly language used to make the website interactive",
      "c) JavaScript is a compiled language used to make the website interactive",
      "d) None of the above",
    ],
    correct: "a) JavaScript is a scripting language used to make the website interactive",
  },
  {
    question: "Which of the following is correct about JavaScript?",
    answers: [
      "a) JavaScript is an Object-Based language",
      "b) JavaScript is Assembly-language",
      "c) JavaScript is an Object-Oriented language",
      "d) JavaScript is a High-level language",
    ],
    correct: "a) JavaScript is an Object-Based language",
  },
  {
    question: "Which statement defines closures in JavaScript?",
    answers: [
      "a) JavaScript is a function that is enclosed with references to its inner function scope",
      "b) JavaScript is a function that is enclosed with references to its lexical environment",
      "c) JavaScript is a function that is enclosed with the object to its inner function scope",
      "d) None of the above",
    ],
    correct: "b) JavaScript is a function that is enclosed with references to its lexical environment",
  },
  {
    question: "Arrays in JavaScript are defined by which of the following statements?",
    answers: [
      "a) It is an ordered list of values",
      "b) It is an ordered list of objects",
      "c) It is an ordered list of string",
      "d) It is an ordered list of functions",
    ],
    correct: "a) It is an ordered list of values",
  },
  {
    question: "Which of the following can be used to call a JavaScript Code Snippet?",
    answers: [
      "a) RMI",
      "b) Preprocessor",
      "c) Triggering Event",
      "d) Function/Method",
    ],
    correct: "d) Function/Method",
  },
]

var playerTally = 0;
var playerScore = 0;
console.log(qarray[playerTally].question)
// playerTally++
// console.log(qarray[playerTally].question)

// Timer

// Timer START on click

var startbtn = document.querySelector(".startbtn");

startbtn.addEventListener("click", function () {
  setTime();
  document.querySelector(".start-quiz").classList.add("hidden");
  document.querySelector(".quiz").classList.remove("hidden");
  display();
});

// Selects element by class
var timeEl = document.querySelector(".time");
// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 15;

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

// Function to show a question and answers based on an index
function display() {
  document.querySelector(".titleq").textContent = qarray[playerTally].question;
  for (let i = 0; i < qarray[playerTally].answers.length; i++) {
    const element = qarray[playerTally].answers[i];
    document.querySelector(".input-answers").children[i].textContent = element
  }
}



// Click to view high scores, show initials/scores


// Show 5 questions with answers squencially
// Add up andwers as you go



// Create an input box for players initials

var formEl = document.querySelector('#input-form');
var initialsEl = document.querySelector('input[name="Initials"]');

function handleFormSubmit(event) {
  event.preventDefault();

  console.log('Initials', initialsEl.val());
}
formEl.addEventListener('submit', handleFormSubmit);

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