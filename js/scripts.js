
function Athlete(title) {
  this.title = title;
  this.roll = [];
  this.playerScore = 0;
  this.turnTotal = 0;
}


var player1 = new Athlete("jared");
var player2 = new Athlete("matt");
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
  console.log(player1.roll);
  console.log(player2.roll);
}

Athlete.prototype.hold = function() {
  if(this.turnTotal === 0) {
  return false
  } else {
    this.playerScore = this.playerScore += this.turnTotal;
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
