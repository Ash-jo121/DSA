/**
 * @param {number[][]} isConnected
 * @return {number}
 */
function bfsHelper(isConnected, visited, index) {
  let queue = [];
  queue.push(index);
  while (queue.length > 0) {
    const front = queue.shift();
    visited[front] = true;
    let i = front - 1;
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j] === 1 && i !== j && !visited[j + 1]) {
        queue.push(j + 1);
        visited[j + 1] = true;
      }
    }
  }
}
var findCircleNum = function (isConnected) {
  let n = isConnected.length;
  let visited = new Array(n + 1).fill(false);

  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      count++;
      bfsHelper(isConnected, visited, i);
    }
  }
  return count;
};

console.log(
  findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
