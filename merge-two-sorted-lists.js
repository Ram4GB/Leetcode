/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let node1 = list1;
  let node2 = list2;
  let root = null;
  let tail = null;
  while (node1 && node2) {
    if (node1.val < node2.val) {
      if (!root) {
        root= tail = node1;
        node1=node1.next;
      } else {
        tail.next = node1;
        tail = node1;
        node1=node1.next;
      }
    } else {
      if (!root) {
        root = tail = node2;
        node2=node2.next;
      } else {
        tail.next = node2;
        tail = node2;
        node2=node2.next;
      }
    }
  }

  while (node1) {
    if (!root) {
      root = tail = node1;
    } else {
      tail.next = node1;
      tail=node1;
    }
    node1=node1.next;
  }

  while(node2) {
    if (!root) {
      root = tail = node2;
    } else {
      tail.next = node2;
      tail = node2;
    }
    node2=node2.next;
  }

  return root;
};

// 1-5-4
// 1-2-3-6
// 1-1-2-
