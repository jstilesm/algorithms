/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
  let count = 0;

  for (let i = 1; i < s.length; i++) {
    let unique_left = 0;
    let unique_right = 0;
    const left_letters = {};
    const right_letters = {};

    let left = s.slice(0, i);
    let right = s.slice(i);

    for (let j = 0; j < left.length; j++) {
      if (!(left[j] in left_letters)) {
        unique_left += 1;
        left_letters[left[j]] = 0;
        console.log(left_letters);
      }
    }
    for (let k = 0; k < right.length; k++) {
      if (!(right[k] in right_letters)) {
        unique_right += 1;
        left_letters[right[k]] = 0;
      }
    }
    if (unique_right === unique_left) {
      count += 1;
    }
  }
  return count;
};
