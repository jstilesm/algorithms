function maxValue(n, rounds) {
  // Write your code here
  let investments = [];
  for (let i = 0; i < n; i++) {
    investments.push(0);
  }
  console.log(investments);
  for (let j = 0; j < rounds.length; j++) {
    let start = rounds[j][0] - 1;
    let end = rounds[j][1];
    let increase = rounds[j][2];
    console.log(start, end, increase);
    for (let k = start; k < end; k++) {
      investments[k] += increase;
    }
  }

  let max = 0;
  console.log(investments);
  console.log(investments);
  for (let l = 0; l < investments.length; l++) {
    if (investments[l] > max) {
      max = investments[l];
    }
  }
  return max;
}

console.log(
  maxValue(4, [
    [2, 3, 603],
    [1, 1, 286],
    [4, 4, 882],
  ])
);
