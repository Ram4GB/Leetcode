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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  const printTree = (root) => {
    if (root === null) return [];
    let mid = root.val;
    const left = printTree(root.left);
    const right = printTree(root.right);
    return [...left, mid, ...right];
  };

  const buildBalanceTree = (nums) => {
    if (nums.length === 0) return null;
    let mid = Math.floor(nums.length / 2);
    const node = new TreeNode(nums[mid], buildBalanceTree(nums.slice(0, mid)), buildBalanceTree(nums.slice(mid + 1)));
    return node;
  };

  const sortedArr = printTree(root);
  
  return buildBalanceTree(sortedArr);
};
