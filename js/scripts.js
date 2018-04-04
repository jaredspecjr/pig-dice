var turnTotal = [];

function diceRoll(min, max) {
  var roll = Math.random() * (6 - 1) + 1;
  var result = Math.round(roll);
  if (result === 1) {
    turnTotal.length = 0;
  } else  {
    turnTotal.push(result);
  }
  console.log(result);
  console.log(turnTotal);
}
