/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let visited = Array.from({ length: m }, () => new Array(n).fill(false));
  let result = 0;

  let queue = [];
  let j = 0;
  let k = n - 1;
  for (let i = 0; i < m; i++) {
    if (grid[i][j] === 1) {
      queue.push([i, j]);
      visited[i][j] = true;
    }
    if (grid[i][k] === 1) {
      queue.push([i, k]);
      visited[i][k] = true;
    }
  }
  let i = 0;
  k = m - 1;
  for (let j = 0; j < n; j++) {
    if (grid[i][j] === 1) {
      queue.push([i, j]);
      visited[i][j] = true;
    }
    if (grid[k][j] === 1) {
      queue.push([k, j]);
      visited[k][j] = true;
    }
  }

  const dims = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    grid[x][y] = 2;
    for ([dx, dy] of dims) {
      if (x + dx >= 0 && x + dx < m && y + dy >= 0 && y + dy < n) {
        if (grid[x + dx][y + dy] === 1 && !visited[x + dx][y + dy]) {
          visited[x + dx][y + dy] = true;
          queue.push([x + dx, y + dy]);
        }
      }
    }
  }
  console.log(grid);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        let queue = [];
        queue.push([i, j]);
        visited[i][j] = true;
        while (queue.length > 0) {
          const [x, y] = queue.shift();
          result++;
          for ([dx, dy] of dims) {
            if (x + dx >= 0 && x + dx < m && y + dy >= 0 && y + dy < n) {
              if (grid[x + dx][y + dy] === 1 && !visited[x + dx][y + dy]) {
                visited[x + dx][y + dy] = true;
                queue.push([x + dx, y + dy]);
              }
            }
          }
        }
      }
    }
  }
  return result;
};

console.log(
  numEnclaves([
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
  ])
);

[
  [0, 0, 0, 2, 2, 2, 0, 2, 0, 0],
  [2, 2, 0, 0, 0, 2, 0, 2, 2, 2],
  [0, 0, 0, 2, 2, 2, 0, 2, 0, 0],
  [0, 2, 2, 0, 0, 0, 1, 0, 1, 0],
  [0, 2, 2, 2, 2, 2, 0, 0, 1, 0],
  [0, 0, 2, 0, 2, 2, 2, 2, 0, 2],
  [0, 2, 2, 0, 0, 0, 2, 2, 2, 2],
  [0, 0, 2, 0, 0, 2, 0, 2, 0, 2],
  [2, 0, 2, 0, 2, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 2, 0, 0, 0, 2],
];
