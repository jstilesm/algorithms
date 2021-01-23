var checkArithmeticSubarrays = function (nums, l, r) {
  const answers = [];
  for (let i = 0; i < l.length; i++) {
    let array = nums.slice(l[i], r[i] + 1);
    answers.push(checkArithmetic(array));
  }
  return answers;
};

var checkArithmetic = function (array) {
  let sorted = array.sort((a, b) => a - b);
  //   console.log(sorted);
  let difference;
  for (let j = 0; j < sorted.length - 1; j++) {
    if (j > 0) {
      if (sorted[j + 1] - sorted[j] !== difference) {
        console.log(sorted[j + 1] - sorted[j]);
        return false;
      }
    } else {
      difference = sorted[j + 1] - sorted[j];
      //   console.log(difference);
    }
  }
  return true;
};

console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]));
