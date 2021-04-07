/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let dp = [];
  // base case
  for (let i = 0; i < n + 1; i++) {
    dp.push(0);
  }
  dp[0] = 1;
  //   dp[1] = 1;
  // recursive step

  for (let i = 1; i < n + 1; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
      console.log(dp[j], dp[i - j - 1]);
      console.log(dp);
    }
  }
  return dp[n];

  // dp = []
  // dp = [1]
  // dp[1] += 1 * 1
  // dp = [1,1]
  // dp[2] += 1 * 1
  //   dp[2]
};

console.log(numTrees(4));
