import { MinPriorityQueue } from "datastructures-js";
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  let n = heights.length;
  let m = heights[0].length;
  let visited = Array.from({ length: n }, () =>
    new Array(m).fill(Number.MAX_VALUE)
  );
  let priorityQueue = new MinPriorityQueue();

  visited[0][0] = 0;
  priorityQueue.enqueue([0, 0, 0]);

  const deps = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  while (priorityQueue.size() > 0) {
    const node = priorityQueue.dequeue();
    const x = node[1];
    const y = node[2];
    const effort = node[0];
    for (let dep of deps) {
      const newX = x + dep[0];
      const newY = y + dep[1];

      if (newX < 0 || newY < 0 || newX >= n || newY >= m) {
        continue;
      }

      const newEffort = Math.max(
        Math.abs(heights[newX][newY] - heights[x][y]),
        effort
      );
      if (visited[newX][newY] > newEffort) {
        visited[newX][newY] = newEffort;
        priorityQueue.enqueue([newEffort, newX, newY]);
      }
    }
  }

  return visited[n - 1][m - 1];
};

console.log(minimumEffortPath([[1, 10, 6, 7, 9, 10, 4, 9]]));
