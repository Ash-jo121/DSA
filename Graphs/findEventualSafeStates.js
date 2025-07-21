/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  let reverseGraph = Array.from({ length: graph.length }, () => new Array());
  let outDegree = new Array(graph.length).fill(0);
  let queue = [];
  let result = [];

  for (let i = 0; i < graph.length; i++) {
    for (let node of graph[i]) {
      reverseGraph[node].push(i);
      outDegree[i]++;
    }
  }

  for (let i = 0; i < outDegree.length; i++) {
    if (outDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);
    for (let outNode of reverseGraph[node]) {
      outDegree[outNode]--;
      if (outDegree[outNode] === 0) {
        queue.push(outNode);
      }
    }
  }

  return result.sort(function (a, b) {
    return a - b;
  });
};

eventualSafeNodes([[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []]);
