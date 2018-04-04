var finalTotal = [];
var playerTotal = [];
var turnTotal = [];

function score() {
  var total=0;
  for(i = 0; i < playerTotal.length; i++){
    total += playerTotal[i];
  }
  var result = total;
  if (result < 100) {
    finalTotal.length = 0;
  } else {
    alert("Congratulations!");
    return finalTotal.push(total);
  }
}


function hold() {
  var total=0;
  for(i = 0; i < turnTotal.length; i++){
    total += turnTotal[i];
  }
  return playerTotal.push(total);

}

function diceRoll(min, max) {
  var roll = Math.random() * (6 - 1) + 1;
  var result = Math.round(roll);
  if (result === 1) {
    turnTotal.length = 0;
  } else {
    turnTotal.push(result);
  }
  console.log(result);
  console.log(turnTotal);
}
