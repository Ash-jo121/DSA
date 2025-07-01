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
 * @return {boolean}
 */

function helperFunction(root) {
  if (root === null) {
    return [0, true];
  }

  const leftResult = helperFunction(root.left);
  const rightResult = helperFunction(root.right);
  const checkHeightBalance =
    Math.abs(leftResult[0] - rightResult[0]) <= 1 &&
    leftResult[0] &&
    rightResult[0];
  return [1 + Math.max(leftResult[0], rightResult[0]), checkHeightBalance];
}

var isBalanced = function (root) {
  const result = helperFunction(root);
  return result[1];
};
