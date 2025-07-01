/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

function helperFunction(root, arr) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}

var zigzagLevelOrder = function (root) {
  let arr = [];
  let result = helperFunction(root, arr);
  let flag = true;
  for (let i = 0; i < result.length; i++) {
    if (!flag) {
      result[i].reverse();
    }
    flag = !flag;
  }

  return result;
};
