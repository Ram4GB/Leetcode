class INode {
  constructor(v) {
    this.val = v;
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(v) {
    const node = new INode(v);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  peek() {
    if(this.size === 0) throw new Error('Empty stack');
    return this.top.val;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    const v = this.top.val;
    this.top = this.top.next;
    this.size--;
    return v;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size===0;
  }

  print() {
    let n = this.top;
    let s = ''
    while(n != null) {
      s = s + n.val + (n.next ? ' -> ' : '')
      n=n.next;
    }
    console.log(s)
  }
}

const stack = new Stack()

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.getSize());
console.log(stack.isEmpty());
stack.print();