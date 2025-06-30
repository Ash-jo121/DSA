/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
  /**
   * @param {Node} node
   * @return {Node}
   */
  dfsHelper(node, obj) {
    if (obj[node]) {
      return obj[node];
    }

    let newNode = new Node(node.val, []);
    let tempArr = [];
    obj[node] = newNode;
    for (let neighbour of node.neighbours) {
      const childNode = this.dfsHelper(neighbour, obj);
      tempArr.push(childNode);
    }
    newNode.neighbours.push(...tempArr);
    return newNode;
  }
  cloneGraph(node) {
    let newNode = new Node(node.val, []);
    let mp = {};
    newNode = this.dfsHelper(node, mp);
    return newNode;
  }
}
