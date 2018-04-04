var finalTotal = [];
var playerTotal = [];
var turnTotal = [];
//change this VVVV
function Athlete(title) {
  this.title = title;
  this.diceRoll= turnTotal;
  this.hold = playerTotal;
  this.score = finalTotal;
}
//change this ^^^
console.log(Athlete);

function diceRoll(min, max) {
  var roll = Math.random() * (6 - 1) + 1;
  var result = Math.round(roll);
  if (result === 1) {
    turnTotal.length = 0;
  } else {
    turnTotal.push(result);
  }
}

function hold() {
  var total=0;
  for(i = 0; i < turnTotal.length; i++){
    total += turnTotal[i];
  }
  return playerTotal.push(total);
}

function score() {
  var total=0;
  for(i = 0; i < playerTotal.length; i++){
    total += playerTotal[i];
  }
  var result = total;
  if (result < 100) {
    finalTotal.length = 0;
  } else {
    return finalTotal.push(total);
  }
}
