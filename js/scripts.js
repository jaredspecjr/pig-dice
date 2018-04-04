function diceRoll(min, max) {
  var roll = Math.random() * (6 - 1) + 1;
  var result = Math.round(roll);
  if (result === 1) {
    return 0;
  }
  console.log(result);
}
