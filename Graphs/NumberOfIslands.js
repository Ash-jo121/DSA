class Solution {
  /**
   * @param {character[][]} grid
   * @return {number}
   */
  bfsTraversal(i, j, grid) {
    let queue = [];
    queue.push([i, j]);
    grid[i][j] = "2";
    while (queue.length) {
      let newI = queue[0][0];
      let newJ = queue[0][1];
      if (newI - 1 >= 0) {
        if (grid[newI - 1][newJ] === "1") {
          grid[newI - 1][newJ] = "2";
          queue.push([newI - 1, newJ]);
        }
      }
      if (newI + 1 < grid.length) {
        if (grid[newI + 1][newJ] === "1") {
          grid[newI + 1][newJ] = "2";
          queue.push([newI + 1, newJ]);
        }
      }
      if (newJ - 1 >= 0) {
        if (grid[newI][newJ - 1] === "1") {
          grid[newI][newJ - 1] = "2";
          queue.push([newI, newJ - 1]);
        }
      }
      if (newJ + 1 < grid[newI].length) {
        if (grid[newI][newJ + 1] === "1") {
          grid[newI][newJ + 1] = "2";
          queue.push([newI, newJ + 1]);
        }
      }
      queue.shift();
    }
  }

  numIslands(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === "1") {
          this.bfsTraversal(i, j, grid);
          count++;
        }
      }
    }

    return count;
  }
}

const solution = new Solution();
console.log(
  solution.numIslands([
    ["1","1","0","0","1"],
    ["1","1","0","0","1"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ])
);
