
//Business Logic
var gamer = function(name, score, turn){
  this.name = name;
  this.score = score;
  this.turn = turn;
}

gamer.prototype.addScore = function(){
  this.score += totalScore;
}

var gamerOne = {};
var gamerTwo = {};

var dice = 0;
var totalScore= 0;
var roll = function(){
  dice = Math.floor(Math.random()*6) + 1;
  if (dice != 1){
    totalScore += dice
  } else {
    totalScore = 0;
    change();
  }
}


var winner = function(){
  if (gamerOne.score >= 100){
    alert( gamerOne.name + "  WINS ")

     $("#roll").prop("disabled", true);
     $("#hold").prop("disabled", true);
  } else if (gamer.score >= 100){
    alert("!!!" + gamerTwo.name + "  WINS !!!")

    $("#roll").prop("disabled", true);
    $("#hold").prop("disabled", true);
}
}

function start(){
  var fName=document.getElementById("one").value;
  var sName=document.getElementById("two").value;
  document.getElementById("gamerOne").innerHTML=fName;
  document.getElementById("gamerTwo").innerHTML=sName;
}


//UI LOGIC
$(document).ready(function(){
  $(".entry").submit(function(event){
    event.preventDefault();
    var gamerOneName = $("#one").val();
    var gamerTwoName = $("#two").val();
    $("#gamerOne").text(gamerOneName);
    $("#gamerTwo").text(gamerTwoName);
    $(".print").hide();
    $("#game").fadeIn();

    $("button#dice").click(function(){
      roll();
      $("#round-total").text(totalScore);
    })

    $("button#hold").click(function(){
      if (gamerOne.turn == "enabled") {
        gamerOne.addScore();
        $("#score-one").text(gamerOneName.score);
        winner();
        change();
      } else if (gamerTwo.turn == "enabled"){
        gamerTwo.addScore();
        $("#score-two").text(gamerTwoName.score);
        winner();
        change();
      }
      totalScore = 0;
      $("#round-total").text(roundTotal);
    })
  })
});
