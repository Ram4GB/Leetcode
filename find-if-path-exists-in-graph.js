/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  if (source === destination) return true;

  const map = new Map();

  for (let i = 0; i < n; i++) {
    map.set(i, []);
  }

  for (let i = 0; i < edges.length; i++) {
    map.get(edges[i][0]).push(edges[i]);
    map.get(edges[i][1]).push(edges[i]);
  }

  const visited = Array.from({length: n}).fill(0)
  const queue = new IQueue();
  queue.enqueue(source);

  while (queue.size > 0) {
    const currentVertex = queue.dequeue()
    const paths = map.get(currentVertex) ?? [];
    for (let i = 0; i < paths.length; i++) {
      const firstVertex = paths[i][0];
      const secondVertex = paths[i][1];
      if (firstVertex === destination || secondVertex === destination)
        return true;
      if (firstVertex !== currentVertex && !visited[firstVertex]) {
        queue.enqueue(firstVertex);
        visited[firstVertex] = true;
      } else if (secondVertex !== currentVertex && !visited[secondVertex]) {
        queue.enqueue(secondVertex);
        visited[secondVertex] = true;
      }
    }
  }

  return false;
};

class Node {
  val;
  next;
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class IQueue {
  head;
  tail;
  size;

  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return;
    const currentNode = this.head;
    this.head = this.head.next;
    if (this.head === null) this.tail = null;
    this.size--;
    return currentNode.val;
  }
}

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
);

console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);
