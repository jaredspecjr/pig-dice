// var finalTotal = [];
// var playerTotal = [];
// var turnTotal = [];
//change this VVVV
function Athlete(title) {
  this.title = title;
  this.roll = [];
  this.playerScore = [];
  this.turnTotal = 0;
}
//change this ^^^

var player1 = new Athlete("jared");
var player2 = new Athlete("matt");
Athlete.prototype.diceRoll = function() {
  var random = Math.random() * (6 - 1) + 1;
   this.roll = Math.round(random);
   this.turnTotal = this.turnTotal += this.roll;
  // if (this.roll === 1) {
  //   turnTotal.length = 0;
  //   this.roll = 0;
  // } else {
  //   turnTotal.push(this.roll);
  //   // player1.roll.push(this.roll);
  // }
  console.log(player1.roll);
  console.log(player2.roll);
}

Athlete.prototype.hold = function() {

  // for(i = 0; i < turnTotal.length; i++){
  //   total += turnTotal[i];
  //   this.turnTotal=total;
  // }
  // return this.turnTotal;
  return this.turnTotal;
}

Athlete.prototype.score = function() {

}








// Athlete.prototype.score = function() {
//   var total=0;
//   for(i = 0; i < this.playerScore.length; i++){
//     total += this.playerScore[i];
//   }
//   return playerScore.push(this.turnTotal);
//   var result = total;
//   this.playerTotal = result;
//   if (result < 100) {
//     finalTotal.length = 0;
//   } else {
//     return finalTotal.push(total);
//   }
// }
