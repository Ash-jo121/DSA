/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let queue = [];
  let result = Array.from({ length: n }, () => new Array(m).fill(Infinity));
  let n = mat.length;
  let m = mat[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 0) {
        result[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length > 0) {
    const [i, j] = queue.shift();
    for (const [dx, dy] of dirs) {
      const ni = i + dx;
      const nj = j + dy;
      if (
        ni >= 0 &&
        nj >= 0 &&
        ni < n &&
        nj < m &&
        result[ni][nj] > result[i][j] + 1
      ) {
        result[ni][nj] = result[i][j] + 1;
        queue.push([ni, nj]);
      }
    }
  }
};
