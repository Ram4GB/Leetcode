/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  const hash = new Set();
  while(headA!=null) {
    hash.add(headA);
    headA=headA.next;
  }
  while(headB!=null) {
    if (hash.has(headB)) return headB.val;
    hash.add(headB);
    headB=headB.next;
  }
  return null;
};

console.log(getIntersectionNode())