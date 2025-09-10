/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  // generate map
  const queue = new MyQueue();
  queue.enqueue([sr, sc])
  const targetColor = image[sr][sc];

  if (targetColor === color) return image;

  while (queue.size > 0) {
    const currentPoint = queue.dequeue()
    const [r, c] = currentPoint;
    image[r][c] = color;
    // top
    if (r - 1 >= 0 && image[r - 1][c] === targetColor) queue.enqueue([r - 1, c]);
    // bottom
    if (r + 1 < image.length && image[r + 1][c] === targetColor)
      queue.enqueue([r + 1, c]);
    // left
    if (c - 1 >= 0 && image[r][c - 1] === targetColor) queue.enqueue([r, c - 1]);
    // right
    if (c + 1 < image[r].length && image[r][c + 1] === targetColor)
      queue.enqueue([r, c + 1]);
  }

  return image;
};

class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class MyQueue {
  tail;
  head;
  size;
  
  constructor() {
    this.tail = this.head = null;
    this.size = 0;
  }

  enqueue (val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head =  this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue () {
    const currentNode = this.head;

    this.head = this.head.next;
    if (this.head === null) this.tail = null;

    this.size --;

    return currentNode.val;
  }

}


console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    0
  )
);


// /**
//  * @param {number[][]} image
//  * @param {number} sr
//  * @param {number} sc
//  * @param {number} color
//  * @return {number[][]}
//  */
// var floodFill = function (image, sr, sc, color) {
//   // generate map
//   const queue = [[sr, sc]];
//   const targetColor = image[sr][sc];

//   if (targetColor === color) return image;

//   while (queue.length > 0) {
//     const currentPoint = queue[0];
//     const [r, c] = currentPoint;
//     image[r][c] = color;
//     queue.shift();
//     // top
//     if (r - 1 >= 0 && image[r - 1][c] === targetColor) queue.push([r - 1, c]);
//     // bottom
//     if (r + 1 < image.length && image[r + 1][c] === targetColor)
//       queue.push([r + 1, c]);
//     // left
//     if (c - 1 >= 0 && image[r][c - 1] === targetColor) queue.push([r, c - 1]);
//     // right
//     if (c + 1 < image[r].length && image[r][c + 1] === targetColor)
//       queue.push([r, c + 1]);
//   }

//   return image;
// };