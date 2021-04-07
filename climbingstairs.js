/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let a = 1;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let t = a + b;
    a = b;
    b = t;
  }

  // 1,1, 2
  // 1,2,3

  return b;
};
