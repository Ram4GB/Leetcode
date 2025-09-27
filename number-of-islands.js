/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const visited = new Map();
  let res = 0;

  for (let i = 0; i < grid.length; i++) {
    const cols = grid[i].length;
    for (let j = 0; j < grid[i].length; j++) {
      // check if we already visit this cell
      if (grid[i][j] === "1" && !visited.has(getKey(i, j, cols))) {
        // bfs
        res++;
        const queue = new MyQueue();
        queue.enqueue([i, j]);
        visited.set(getKey(i, j, cols), res);
        while (queue.size > 0) {
          const currentCell = queue.dequeue();
          const [x, y] = currentCell;
          // top
          if (x - 1 >= 0 && grid[x - 1][y] === "1" && !visited.has(getKey(x - 1, y, cols))) {
            queue.enqueue([x - 1, y]);
            visited.set(getKey(x - 1, y, cols), res);
          }
          // bottom
          if (x + 1 < grid.length && grid[x + 1][y] === "1" && !visited.has(getKey(x + 1, y, cols))) {
            queue.enqueue([x + 1, y]);
            visited.set(getKey(x + 1, y, cols), res);
          }
          // left
          if (y - 1 >= 0 && grid[x][y - 1] === "1" && !visited.has(getKey(x, y - 1, cols))) {
            queue.enqueue([x, y - 1]);
            visited.set(getKey(x, y - 1, cols), res);
          }
          // right
          if (y + 1 < grid[x].length && grid[x][y + 1] === "1" && !visited.has(getKey(x, y + 1, cols))) {
            queue.enqueue([x, y + 1]);
            visited.set(getKey(x, y + 1, cols), res);
          }
        }
      }
    }
  }

  return res;
};

const getKey = (x, y, cols) => x * cols + y;

class Node {
  val;
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyQueue {
  head = null;
  tail = null;
  size = 0;
  constructor() {}

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    const curNode = this.head;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.size--;
    return curNode.val;
  }
}

console.log(
  numIslands([
    ["1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "0", "1", "1"],
    ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "0"],
    ["1", "0", "1", "1", "1", "0", "0", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    ["1", "0", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "0", "1", "1", "1", "0", "1", "1", "1"],
    ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "0", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "0", "1", "1"],
    ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    ["0", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1"],
    ["1", "0", "1", "1", "1", "1", "1", "0", "1", "1", "1", "0", "1", "1", "1", "1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1", "1", "0", "0"],
    ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
  ])
);
