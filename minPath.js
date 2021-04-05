/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  console.log(grid);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0 && i === 0) {
        continue;
      } else if (j === 0 && i !== 0) {
        grid[i][j] += grid[i - 1][j];
      } else if (j !== 0 && i === 0) {
        grid[i][j] += grid[i][j - 1];
      } else {
        grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + grid[i][j];
      }
    }
  }
  console.log(grid);
  return grid[m - 1][n - 1];
};

console.log(
  minPathSum([
    [1, 2],
    [5, 6],
    [1, 1],
  ])
);
