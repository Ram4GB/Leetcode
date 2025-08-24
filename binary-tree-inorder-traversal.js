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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return []
  if (root.left === null && root.right === null) return [root.val];
  const left = inorderTraversal(root.left)
  const mid = [root.val];
  const right = inorderTraversal(root.right)
  return [...left, ...mid, ...right];
};

