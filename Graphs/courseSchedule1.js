/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function dfs(root, graph, visited, recursionStack) {
  if (recursionStack.has(root)) {
    return false;
  }
  if (visited[root]) {
    return true;
  }

  visited[root] = true;
  recursionStack.add(root);
  let finalResult = true;
  for (let neighbour of graph[root]) {
    const result = dfs(neighbour, graph, visited, recursionStack);
    finalResult = finalResult && result;
  }
  recursionStack.delete(root);
  return finalResult;
}

var canFinish = function (numCourses, prerequisites) {
  let visited = new Array(numCourses).fill(false);
  let graph = Array.from({ length: numCourses }, () => new Array());

  for (let pair of prerequisites) {
    let start = pair[1];
    let end = pair[0];
    graph[start].push(end);
  }

  for (let i = 0; i < numCourses; i++) {
    if (!visited[i]) {
      const result = dfs(i, graph, visited, new Set());
      if (!result) {
        return false;
      }
    }
  }

  return true;
};

console.log(canFinish(2, [[1, 0]]));
