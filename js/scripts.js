

function Athlete(title) {
  this.title = title;
  this.roll = 0;
  this.playerScore = 0;
  this.turnTotal = 0;
}




Athlete.prototype.diceRoll = function() {
  var random = Math.random() * (6 - 1) + 1;
   this.roll = Math.round(random);
  if (this.roll === 1) {
    this.roll = 0;
    this.turnTotal = 0;
    return false;
  } else {
    this.turnTotal = this.turnTotal += this.roll;
    return true;


  }

}

Athlete.prototype.hold = function() {
  if(this.turnTotal === 0) {
  return false
  } else {
    this.playerScore = this.playerScore += this.turnTotal;
    this.turnTotal = 0;
    return true
  }

}

Athlete.prototype.score = function() {
  if(this.playerScore >= 100) {
    return true;
  } else {
    return false;
  }
}



$(function() {
  $("#form1").submit(function(event){
    event.preventDefault();
    player1 = new Athlete($("input#player1").val());
    player2 = new Athlete($("input#player2").val());
  });
  $("#p1Roll").click(function(){
    player1.diceRoll();
    $("#player1roll").text("Roll:" + player1.roll);
    $("#player1turn").text("Total:" + player1.turnTotal);
  });
  $("#p2Roll").click(function(){
    player2.diceRoll();
    $("#player2roll").text("Roll:" + player2.roll);
    $("#player2turn").text("Total:" + player2.turnTotal);
  });
  $("#p1Hold").click(function(){
    player1.hold();
    $("#player1hold").text("Score:" + player1.playerScore);
    player1.score();
    if(player1.score() === true){
      alert("you won yo");
    }
    //change this ^^
  });
  $("#p2Hold").click(function(){
    player2.hold();
  });
});
