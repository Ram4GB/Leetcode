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
    let node = head;
    const arr = [];
    while (node!==null) {
      arr.push(node.val);
      node = node.next;
    }

    // [1,2,3,4,5]

    // build up the linked list from the array

    let h = t = null;
    for (let i = arr.length-1; i >=0; i--) {
      const newNode = new ListNode(arr[i], null);
      if (h === null) {
        h = t = newNode;
      } else {  
        t.next = newNode;
        t = newNode
      }
    }

    return h;
};

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