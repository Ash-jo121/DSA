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
 * @return {number}
 */

function helperFunction(root) {
  if (root === null) {
    return [-1, 0];
  }

  const leftResult = helperFunction(root.left);
  const rightResult = helperFunction(root.right);
  const diameter = Math.max(
    leftResult[1],
    rightResult[1],
    2 + leftResult[0] + rightResult[0]
  );
  const depth = 1 + Math.max(leftResult[0], rightResult[0]);
  return [depth, diameter];
}

var diameterOfBinaryTree = function (root) {
  const result = helperFunction(root);
  return result[1];
};
