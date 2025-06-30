class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
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
          grid[newI - 1][newJ] !== 2 &&
          grid[newI - 1][newJ] !== 0 &&
          !visited[[newI - 1, newJ]]
        ) {
          queue.push([newI - 1, newJ, level + 1]);
          visited[[newI - 1, newJ]] = true;

          grid[newI - 1][newJ] =
            typeof grid[newI - 1][newJ] === "string"
              ? Math.min(level + 1, Number(grid[newI - 1][newJ])).toString()
              : `${level + 1}`;
        }
      }
      if (newI + 1 < grid.length) {
        if (
          grid[newI + 1][newJ] !== 2 &&
          grid[newI + 1][newJ] !== 0 &&
          !visited[[newI + 1, newJ]]
        ) {
          queue.push([newI + 1, newJ, level + 1]);
          visited[[newI + 1, newJ]] = true;
          grid[newI + 1][newJ] =
            typeof grid[newI + 1][newJ] === "string"
              ? Math.min(level + 1, Number(grid[newI + 1][newJ])).toString()
              : `${level + 1}`;
        }
      }

      if (newJ - 1 >= 0) {
        if (
          grid[newI][newJ - 1] !== 2 &&
          grid[newI][newJ - 1] !== 0 &&
          !visited[[newI, newJ - 1]]
        ) {
          queue.push([newI, newJ - 1, level + 1]);
          visited[[newI, newJ - 1]] = true;
          grid[newI][newJ - 1] =
            typeof grid[newI][newJ - 1] === "string"
              ? Math.min(level + 1, Number(grid[newI][newJ - 1])).toString()
              : `${level + 1}`;
        }
      }

      if (newJ + 1 < grid[newI].length) {
        if (
          grid[newI][newJ + 1] !== 2 &&
          grid[newI][newJ + 1] !== 0 &&
          !visited[[newI, newJ + 1]]
        ) {
          queue.push([newI, newJ + 1, level + 1]);
          visited[[newI, newJ + 1]] = true;
          grid[newI][newJ + 1] =
            typeof grid[newI][newJ + 1] === "string"
              ? Math.min(level + 1, Number(grid[newI][newJ + 1])).toString()
              : `${level + 1}`;
        }
      }
    }
  }

  orangesRotting(grid) {
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 2) {
          this.bfsHelper(i, j, grid);
        }
      }
    }
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 1) {
          return -1;
        }
        if (typeof grid[i][j] === "string") {
          result = Math.max(Number(grid[i][j]), result);
        }
      }
    }
    return result;
  }
}

const solution = new Solution();
console.log(
  solution.orangesRotting([
    [1, 1, 0],
    [0, 1, 1],
    [0, 1, 2],
  ])
);
