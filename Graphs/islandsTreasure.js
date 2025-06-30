class Solution {
  /**
   * @param {number[][]} grid
   */

  bfsHelper(i, j, grid) {
    let queue = [];
    queue.push([i, j, 0]);
    let visited = {};
    visited[[i, j]] = true;
    while (queue.length) {
      let temp = queue.shift();
      let newI = temp[0];
      let newJ = temp[1];
      let level = temp[2];
      if (newI - 1 >= 0) {
        if (
          grid[newI - 1][newJ] !== -1 &&
          grid[newI - 1][newJ] !== 0 &&
          !visited[[newI - 1, newJ]]
        ) {
          queue.push([newI - 1, newJ, level + 1]);
          visited[[newI - 1, newJ]] = true;
          grid[newI - 1][newJ] = Math.min(level + 1, grid[newI - 1][newJ]);
        }
      }
      if (newI + 1 < grid.length) {
        if (
          grid[newI + 1][newJ] !== -1 &&
          grid[newI + 1][newJ] !== 0 &&
          !visited[[newI + 1, newJ]]
        ) {
          queue.push([newI + 1, newJ, level + 1]);
          visited[[newI + 1, newJ]] = true;
          grid[newI + 1][newJ] = Math.min(level + 1, grid[newI + 1][newJ]);
        }
      }

      if (newJ - 1 >= 0) {
        if (
          grid[newI][newJ - 1] !== -1 &&
          grid[newI][newJ - 1] !== 0 &&
          !visited[[newI, newJ - 1]]
        ) {
          queue.push([newI, newJ - 1, level + 1]);
          visited[[newI, newJ - 1]] = true;
          grid[newI][newJ - 1] = Math.min(level + 1, grid[newI][newJ - 1]);
        }
      }

      if (newJ + 1 < grid[newI].length) {
        if (
          grid[newI][newJ + 1] !== -1 &&
          grid[newI][newJ + 1] !== 0 &&
          !visited[[newI, newJ + 1]]
        ) {
          queue.push([newI, newJ + 1, level + 1]);
          visited[[newI, newJ + 1]] = true;
          grid[newI][newJ + 1] = Math.min(level + 1, grid[newI][newJ + 1]);
        }
      }
    }
  }

  islandsAndTreasure(grid) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 0) {
          this.bfsHelper(i, j, grid);
        }
      }
    }
    console.log(grid);
  }
}

const solution = new Solution();
const INF = 2147483647;
const grid = [
  [INF, -1, 0, INF],
  [INF, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];

solution.islandsAndTreasure(grid);
