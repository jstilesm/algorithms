/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    for (let j = 3 + i; j < arr.length + 1; j += 2) {
      let subarray = arr.slice(i, j);
      for (let k = 0; k < subarray.length; k++) {
        sum += subarray[k];
      }
    }
  }
  return sum;
};
