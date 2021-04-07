/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let res = 0;
  function helper(index, arr) {
    // base case

    if (arr.length === n) {
      res++;
      return;
    }
    // recursive step
    for (let i = index; i < 5; i++) {
      arr.push(i);
      console.log(arr);
      helper(i, arr);
      arr.pop(i);
    } 
  }
  helper(0, []);
  return res;
};

console.log(countVowelStrings(2));
