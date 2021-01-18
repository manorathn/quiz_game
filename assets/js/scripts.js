var timerEl = document.querySelector("#time");
var startbtn = document.querySelector("#startbtn");
var scoreEl = document.querySelector("#score");
var quizEl = document.querySelector("#quiz");
var correctEl = document.querySelector("#right");
var incorrectEL = document.querySelector("#wrong");

var currentQuestionIndex = 0;

var questions = [
  {
    q: ["What is git?"],
    c: ["a. Version Control", "b. Git is short for GitHub", "c. Slang for Get", "d. a programming language"],
    a: ["a. Version Control"],
  },
  {
    q: ["Which element is considered the “root” HTML element?"],
    c: ["a. <head>", "b. <body>", "c. <!docTYPE html>", "d. <html>"],
    a: ["d. <html>"],
  },
  {
    q: ["Which operator is used to assign a value to a variable??"],
    c: ["a. =", "b. -", "c. *", "d. X"],
    a: ["a. ="],
  },
  {
    q: ["Javascript and Java are the same."],
    c: ["a. True", "b. False"],
    a: "b. False",
  },
  {
    q: ["Is JavaScript case-sensitive? git?"],
    c: ["a. N", "b. Yes"],
    a: ["b. Yes"],
  },
];

function start(){
  startbtn.remove();
  welcome.remove();
};

var quiz = document.querySelector("#quiz")

function getQuestion(){
  for (var i = 0; i < questions[currentQuestionIndex].q.length; i++){
    console.log(questions[currentQuestionIndex]);

  var question = questions[currentQuestionIndex].q;
  console.log(question);
  
  var h2 = document.createElement("h2")
  h2.textContent = question;
  quiz.appendChild(h2);
};

  for (var i = 0; i < questions[currentQuestionIndex].c.length; i++) {
    var div = document.querySelector("#button")
    var div = document.createElement("button");
    var choice = questions[currentQuestionIndex].c[i];
    console.log(choice);

    div.addEventListener("click", function () {
        var playerChoice = this.textContent
        // var checkAnswer = questions[currentQuestionIndex].a;
        checkAnswer(questions[currentQuestionIndex].a, playerChoice)

    })
    div.textContent = choice;
    button.appendChild(div);
}
};
  
  
  

function timer(){

  var time = 90;

  var countDownTimer = setInterval(function() {
  document.getElementById("time").innerHTML = time + " "
  +"seconds";
  time--;

  if(time <= 0){
      clearInterval(countDownTimer);
      alert("Time is up!");
      // document.getElementById("time").innerHTML = "Time is up!"
  }
  }, 1000);
};
  
startbtn.addEventListener("click", function(){

  start();
  timer();
  getQuestion();
  checkAnswer();

})