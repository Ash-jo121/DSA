/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

function dfs(root, graph, visited, stack, recursionStack) {
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
    const result = dfs(neighbour, graph, visited, stack, recursionStack);
    finalResult = finalResult && result;
  }
  recursionStack.delete(root);
  stack.push(root);
  return finalResult;
}

var findOrder = function (numCourses, prerequisites) {
  let visited = new Array(numCourses).fill(false);
  let stack = [];
  let graph = Array.from({ length: numCourses }, () => new Array());

  for (let pair of prerequisites) {
    let start = pair[1];
    let end = pair[0];
    graph[start].push(end);
  }

  for (let i = 0; i < numCourses; i++) {
    if (!visited[i]) {
      const result = dfs(i, graph, visited, stack, new Set());
      if (!result) {
        return [];
      }
    }
  }

  return stack.reverse();
};

console.log(
  findOrder(2, [
    [0, 1],
    [1, 0],
  ])
);
