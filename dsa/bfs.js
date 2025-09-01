/**
 *
 * @param {*} arr
 */
const bfs = (arr) => {
  let currentNode = 0;
  const queue = [0];
  const res = [];
  // Visit the first node
  const visited = new Set([0]);

  // Start from the node 1
  while(queue.length > 0) {
    // Goto the vertex
    res.push(queue[0]);
    queue.shift();

    // Exploid all the node;
    for (let j = 0 ; j < arr[currentNode].length; j++) {
      if (!visited.has(arr[currentNode][j])) {
        // Put it into queue, it means we are going to visit it soon -> visited = true;
        queue.push(arr[currentNode][j])
        visited.add(arr[currentNode][j])
      }
    }
    
    currentNode = queue[0];
  }

  return res;
};


console.log(bfs([[1, 2], [0, 2, 3], [0, 1, 4], [1, 4], [2, 3]]))