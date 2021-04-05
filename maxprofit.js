function selectStock(saving, currentValue, futureValue) {
  let maxprofit = 0;

  let profitable = [];
  let margin = [];
  // fill the two arrays, one with the profitable starting stock prices, and the other with the net gain

  for (let i = 0; i < currentValue.length; i++) {
    let difference = futureValue[i] - currentValue[i];
    if (difference <= 0) {
      continue;
    } else {
      profitable.push(currentValue[i]);
      margin.push(difference);
    }
  }
  //   console.log(profitable);
  //   console.log(margin);

  // all combinations that are within the savings
  // [175,109,210,97], [25,17,18,36]

  for (let x = 0; x < profitable.length; x++) {
    for (let y = profitable.length; y > 0; y--) {
      let possibles = profitable.slice(x, y);
      let gain = margin.slice(x, y);
      if (possibles.length === 0) {
        break;
      }
      console.log(possibles);
      //   console.log(gain);
      let capital = saving;
      let sum = 0;
      for (let z = 0; z < possibles.length; z++) {
        capital -= possibles[z];
        sum += gain[z];
        // console.log(sum);
        if (capital < 0) {
          break;
        }
      }
      //   console.log(sum, capital);
      //   console.log(capital);
      if (capital > 0 && sum > maxprofit) {
        maxprofit = sum;
      }
    }
  }
  return maxprofit;
}

console.log(
  selectStock(
    449,
    [125, 158, 1, 210, 104, 243, 238, 161, 227, 264],
    [298, 268, 287, 84, 267, 64, 269, 284, 273, 96]
  )
);
