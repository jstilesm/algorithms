var uniquePaths = function (m, n) {
  //  base case
  if (m === 1 && n === 1) {
    return 1;
  }

  // recursive step

  if (m > 1 && n > 1) {
    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
  }
  if (m > 1 && n === 1) {
    return uniquePaths(m - 1, n);
  }
  if (n > 1 && m === 1) {
    return uniquePaths(m, n - 1);
  }
};

// console.log(uniquePaths(51, 9));

let uniqueRoute = function (m, n) {
  const result = [[]];
  for (let i = 0; i < n; i++) {
    result[0].push(1);
  }
  for (let i = 1; i < m; i++) {
    result.push([1]);
    // total for current square
    for (let j = 1; j < n; j++) {
      result[i][j] = result[i][j - 1] + result[i - 1][j];
    }
  }
  return result[m - 1][n - 1];
};

console.log(uniqueRoute(3, 7));
