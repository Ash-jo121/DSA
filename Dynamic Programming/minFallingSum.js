/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let dp = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let j = 0; j < n; j++) {
    dp[0][j] = matrix[0][j];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] =
        matrix[i][j] +
        (j - 1 >= 0 && j + 1 < n
          ? Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1])
          : j - 1 >= 0
          ? Math.min(dp[i - 1][j - 1], dp[i - 1][j])
          : j + 1 >= 0
          ? Math.min(dp[i - 1][j + 1], dp[i - 1][j])
          : dp[i - 1][j]);
    }
  }

  let result = Number.MAX_VALUE;
  for (let j = 0; j < n; j++) {
    result = Math.min(dp[m - 1][j], result);
  }

  return result;
};

console.log(
  minFallingPathSum([
    [-19, 57],
    [-40, -5],
  ])
);
