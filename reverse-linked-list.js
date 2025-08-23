/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return null;
    return revert(head, null);
};

const revert = (cur, prev) => {
  const next = cur.next;
  cur.next = prev;

  if (next === null) {
    return cur;
  } else {
    return revert(next, cur)
  }
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const node1 = new ListNode(5, null);
const node2 = new ListNode(4, null);
const node3 = new ListNode(3, null);

node1.next = node2;
node2.next = node3;

let n = reverseList(node1)

while(n!==null) {
  console.log(n.val)
  n=n.next;
}

// cur=5, prev=null, next=4
// 5->null