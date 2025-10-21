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
var deepestLeavesSum = function (root) {
  let queue = [root];
  while (queue.length > 0) {
    const nextQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const item = queue[i];
      if (item.left) {
        nextQueue.push(item.left);
      }
      if (item.right) {
        nextQueue.push(item.right);
      }
    }
    if (!nextQueue.length) {
      return queue.reduce((prev, cur) => cur.val + prev, 0);
    }
    queue = nextQueue;
  }
};
