/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null;
  let max = -1;
  let idx = -1;
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      idx = i;
      max = nums[i];
    }
  }
  const node = new TreeNode(
    nums[idx],
    constructMaximumBinaryTree(nums.slice(0, idx)),
    constructMaximumBinaryTree(nums.slice(idx + 1))
  );
  return node;
};
