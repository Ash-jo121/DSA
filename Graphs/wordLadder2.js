/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
function checkGraphNode(string1, string2) {
  let flag = false;
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      if (!flag) {
        flag = true;
      } else {
        return false;
      }
    }
  }
  return true;
}

function dfs(graph, root, visited, combinations, endWord, progress) {
  if (visited[root]) {
    return;
  }
  if (root === endWord) {
    progress = [...progress, root];
    combinations.push([...progress]);
    visited[root] = false;
    progress.pop();
    return;
  }

  visited[root] = true;
  progress = [...progress, root];
  for (let neighbour of graph[root]) {
    dfs(graph, neighbour, visited, combinations, endWord, progress);
  }
  progress.pop();
  visited[root] = false;
}

var findLadders = function (beginWord, endWord, wordList) {
  let graph = {};
  let visited = {};
  wordList = [beginWord, ...wordList];
  let n = wordList.length;

  for (let i = 0; i < n; i++) {
    graph[wordList[i]] = new Set();
    visited[wordList[i]] = false;
    for (let j = 0; j < n; j++) {
      if (
        wordList[i] !== wordList[j] &&
        checkGraphNode(wordList[i], wordList[j])
      ) {
        graph[wordList[i]].add(wordList[j]);
        // if (graph[wordList[j]]) {
        //   graph[wordList[j]].add(wordList[i]);
        // } else if (wordList[j] !== endWord) {
        //   graph[wordList[j]] = [wordList[i]];
        // }
      }
    }
  }

  visited[endWord] = false;
  let combinations = [];
  let progress = [];
  dfs(graph, beginWord, visited, combinations, endWord, progress);
  let minCount = Number.MAX_VALUE;
  for (let arr of combinations) {
    minCount = Math.min(minCount, arr.length);
  }
  combinations = combinations.filter((item) => item.length === minCount);
  return combinations;
};

console.log(
  findLadders("hot", "dog", [
    "hot",
    "cog",
    "dog",
    "tot",
    "hog",
    "hop",
    "pot",
    "dot",
  ])
);
