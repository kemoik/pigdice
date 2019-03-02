//BUSINESS LOGIC
var player = function(name,score,status){
  this.name = name;
  this.score = score;
  this.turn = turn;
}

player.prototype.addScore = function(){
  this.score += finalScore;
}

var dice = 0;
var finalScore=0;
 function roll() {
   var player1 =[];
   var player2 =[];
  var dice = Math.floor(Math.random()*6)+ 1;
  if(dice != 1){
    (finalScore += dice)
  }else {
    (finalScore = 0);
    change();
  }
}
var change = function() {
  if(player1.turn === "enabled") {
    player1.turn == "enabled";
    player2.turn == "disabled";
  }else if (player2.turn === "enabled") {
    player2.turn == "enabled";
    player1.turn == "disabled";

  }
}

function start(){
  var fName=document.getElementById("one").value;
  var sName=document.getElementById("two").value;
  document.getElementById("onee").innerHTML=fName;
  document.getElementById("twoo").innerHTML=sName;
}












//UI LOGIC
$(document).ready(function(){
  $(".entry").submit(function(event){
    event.preventDefault();
    player1 = $("input#one").val();
    player2 = $("input#two").val();
    $("#onee").text(player1);
    $("#twoo").text(player2);
    $("div#game").toggle();
    $(".entry").hide();

    $("#roll").click(function() {
      roll();
      $("#scores").text(finalscore)
    })

    $("#hold").click(function() {
      if(player1.turn === "enabled") {
        player1.addScore();
        $("score-one").text(player1.score);
        winner();
        change();
      } else if (player2.status == "enabled"){
        player2.addScore();
        $("score-two").text(player2.score);
        winner();
        change();
     }
        finalScore = 0
        $("#scores").text(finalscore)
   })
});
});
