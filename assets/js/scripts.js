var timerEl = document.getElementById("time");
var startbtn = document.getElementById("startbtn");
var scoreEl = document.getElementById("score");
var quizEl = document.getElementById("quiz");


startbtn.addEventListener("click", function(){

  var time = 90;

  var countDownTimer = setInterval(function() {
  document.getElementById("time").innerHTML = time + " "
  +"seconds";
  time--;

  if(time <= 0){
      clearInterval(countDownTimer);
      document.getElementById("time").innerHTML = "Time is up!"
  }
  }, 1000);
});
  