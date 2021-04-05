/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = -1;
      }
    }
  }
  const grid = [[]];

  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i] === -1) {
      continue;
    } else {
      grid[0].push(1);
    }
  }
  for (let i = 1; i < n; i++) {
    if (obstacleGrid[0][i] === -1) {
      grid.push([0]);
    } else {
      grid.push([1]);
    }

    for (let j = 1; j < m; j++) {
      if (obstacleGrid[i][j] === -1) {
        grid[i][j] = 0;
      } else {
        grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
      }
    }
  }
  return grid[m - 1][n - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ])
);
console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
