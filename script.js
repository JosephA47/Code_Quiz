var answerBox = document.getElementById("answer");
var start = document.getElementById("start");
var container = document.getElementById("container")
var startBtn = document.getElementById("startBtn");

var i = 0
var score = 0;

var quizQuestions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "What type of file is used to style a web page",
    choices: ["javascript", "css", "JQuery", "html"],
    answer: "css"
  }
];

function quiz() {
  var newQuestion = quizQuestions[i];

  var quest = document.getElementById("question");
  quest.textContent = newQuestion.title;

  options.innerHTML = "";

  newQuestion.choices.forEach(function (choice, i) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");
    choiceBtn.setAttribute("value", choice);

    choiceBtn.textContent = i + 1 + ". " + choice;

    var options = document.getElementById("options");
    options.appendChild(choiceBtn);

    choiceBtn.addEventListener("click", function () {
      if (this.value == newQuestion.answer) {
        console.log("correct")
        score ++
        alert("correct");

        nextQuestion()
      } else {
        answerBox.textContent = "incorrect. Try Agian"
      }
    });
  });
}

function nextQuestion() {
  i++

  if(i == quizQuestions.length){
    container.textContent = "End of quiz. Your final Score is " + score;

  } else{
    quiz();
  }
}

startBtn.addEventListener("click", function() {
  var startPage = document.getElementById("start-page"); 
  
  startPage.setAttribute("class", "hide");

  container.removeAttribute("class")

  quiz();
})