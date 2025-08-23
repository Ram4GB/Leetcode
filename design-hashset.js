var MyHashSet = function () {
  this.head = this.tail = null;
  this.size = 0;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const newNode = new Node(key);
  if (this.contains(key)) return null;
  if (this.head == null) {
    this.head = this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.size++;
  return null;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  let cur = this.head;
  let prev = null;
  while (cur !== null) {
    if (cur.val !== key) {
      prev = cur;
      cur = cur.next;
    } else {
      if (cur === this.head) {
        this.head = this.head.next;
        if (this.head === null) this.tail = null;
      } else if (cur === this.tail) {
        this.tail = prev;
        prev.next = null;
      } else {
        prev.next = cur.next;
      }
      this.size--;
      break;
    }
  }
  return null;
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  if (this.size === 0) return false;
  let n = this.head;
  while (n !== null) {
    if (n.val === key) return true;
    n = n.next;
  }
  return false;
};

function Node(val, next) {
  this.val = val;
  this.next = next ? next : null;
}

/** */
MyHashSet.prototype.print = function () {
  let n = this.head;
  let s = "";
  while (n !== null) {
    s = s + n.val + (n.next ? " -> " : "");
    n = n.next;
  }
  console.log("list:", s);
  console.log("size:", this.size);
  console.log("this.head", this.head);
  console.log("this.tail", this.tail);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

// const obj = new MyHashSet();
// console.log(obj.add(1));
// console.log(obj.add(2));
// console.log(obj.contains(1))
// console.log(obj.contains(3))
// console.log(obj.add(2))
// console.log(obj.contains(2))
// console.log(obj.remove(2))
// console.log(obj.contains(2))
// obj.print();

// const obj = new MyHashSet();
// console.log(obj.add(9));
// console.log(obj.remove(9));
// obj.print();

const obj = new MyHashSet();
// console.log(obj.add(1));
// console.log(obj.add(2));
// console.log(obj.contains(1));
// console.log(obj.contains(3));
// console.log(obj.add(2));
// console.log(obj.contains(2));
// console.log(obj.remove(2));
// console.log(obj.contains(2));
// console.log(obj.add(1000000));
// console.log(obj.contains(1000000));
obj.add(1);
obj.add(1);
obj.add(1);
obj.add(1);
obj.add(1);
obj.print();
obj.remove(2);
obj.remove(1);
obj.add(3);
console.log(obj.contains(3));
obj.remove(3);
console.log(obj.contains(3));
console.log(obj.contains(3));
obj.print();

// ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
// [[],           [1],   [2],   [1],        [3],        [2],   [2],        [2],      [2]]
// [null,         null,  null,   true,      false,      null,  true,       null,     false]
