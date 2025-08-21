class Stack {
  arr = []
  constructor() {}

  push(v) {
    this.arr.push(v);
  }

  peek() {
    if (this.isEmpty()) throw new Error('Empty stack');
    return this.arr[this.arr.length-1]
  }

  pop() {
    return this.arr.pop();
  }

  size() {
    return this.arr.length
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  print() {
    console.log(this.arr)
  }
}

const stack = new Stack()

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.isEmpty());
stack.print();