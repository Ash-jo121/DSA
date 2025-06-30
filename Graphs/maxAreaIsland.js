class Solution {
  /**
   * @param {character[][]} grid
   * @return {number}
   */
  bfsTraversal(i, j, grid) {
    let queue = [];
    queue.push([i, j]);
    grid[i][j] = 2;
    let islandCount = 1;
    while (queue.length) {
      let newI = queue[0][0];
      let newJ = queue[0][1];
      if (newI - 1 >= 0) {
        if (grid[newI - 1][newJ] === 1) {
          grid[newI - 1][newJ] = 2;
          queue.push([newI - 1, newJ]);
          islandCount++;
        }
      }
      if (newI + 1 < grid.length) {
        if (grid[newI + 1][newJ] === 1) {
          grid[newI + 1][newJ] = 2;
          queue.push([newI + 1, newJ]);
          islandCount++;
        }
      }
      if (newJ - 1 >= 0) {
        if (grid[newI][newJ - 1] === 1) {
          grid[newI][newJ - 1] = 2;
          queue.push([newI, newJ - 1]);
          islandCount++;
        }
      }
      if (newJ + 1 < grid[newI].length) {
        if (grid[newI][newJ + 1] === 1) {
          grid[newI][newJ + 1] = 2;
          queue.push([newI, newJ + 1]);
          islandCount++;
        }
      }
      queue.shift();
    }
    return islandCount;
  }

  maxAreaOfIsland(grid) {
    let maxArea = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 1) {
          const val = this.bfsTraversal(i, j, grid);
          maxArea = Math.max(maxArea, val);
        }
      }
    }

    return maxArea;
  }
}

const solution = new Solution();
console.log(
  solution.maxAreaOfIsland([
    [0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 0, 1],
    [0, 1, 0, 0, 1],
  ])
);
