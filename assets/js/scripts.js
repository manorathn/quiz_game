var timerEl = document.querySelector("#time");
var startbtn = document.querySelector("#startbtn");
var scoreEl = document.querySelector("#score");
var quizEl = document.querySelector("#quiz");

var questions = [
  {
    q: "What is git?",
    c: ["a. Version Control", "b. Git is short for GitHub", "c. Slang for Get", "d. a programming language"],
    a: "a. Version Control",
  },
  {
    q: "Which element is considered the “root” HTML element?",
    c: ["a. <head>", "b. <body>", "c. <!docTYPE html>", "d. <html>"],
    a: "d. <html>",
  },
  {
    q: "Which operator is used to assign a value to a variable??",
    c: ["a. =", "b. -", "c. *", "d. X"],
    a: "a. =",
  },
  {
    q: "Javascript and Java are the same.",
    c: ["a. True", "b. False"],
    a: "b. False",
  },
  {
    q: "Is JavaScript case-sensitive? git?",
    c: ["a. N", "b. Yes"],
    a: "b. Yes",
  },
];

function start(){
  startbtn.remove();
  welcome.remove();
};

function getQuestion(){
  for (var i = 0; i < questions.length; i++){
    var question = this.q;
    document.querySelector("#quiz").innerHTML = question;
  }
}

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

})