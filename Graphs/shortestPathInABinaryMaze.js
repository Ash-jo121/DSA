/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  let result = Number.MAX_VALUE;
  let n = grid.length;
  let queue = [];
  let visited = Array.from({ length: n }, () => new Array(n).fill(false));
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
    return -1;
  }
  if (n === 1) {
    return 1;
  }
  queue.push([0, 0, 1]);
  visited[0][0] = true;
  const deps = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 1],
    [-1, 1],
    [-1, -1],
    [1, -1],
  ];
  while (queue.length > 0) {
    const node = queue.shift();
    for (let dep of deps) {
      const newX = dep[0] + node[0];
      const newY = dep[1] + node[1];
      const length = node[2];
      const newLength = length + 1;
      if (newX < 0 || newY < 0 || newX >= n || newY >= n) {
        continue;
      }
      if (visited[newX][newY]) {
        continue;
      }
      if (grid[newX][newY] === 0) {
        visited[newX][newY] = true;
        queue.push([newX, newY, newLength]);
        if (newX === n - 1 && newY === n - 1) {
          result = Math.min(result, newLength);
        }
      }
    }
  }
  if (result === Number.MAX_VALUE) {
    return -1;
  }
  return result;
};

shortestPathBinaryMatrix([
  [0, 1],
  [1, 0],
]);
shortestPathBinaryMatrix([
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
]);
shortestPathBinaryMatrix([
  [1, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
]);
