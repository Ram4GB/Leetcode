// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var islandPerimeter = function (grid) {
//   let count = 0;
//   for (let i = 0; i < grid.length; i++) {
//     const rows = grid[i];
//     for (let j = 0; j < rows.length; j++) {
//       const cell = rows[j];
//       if (cell === 0) continue;
//       const top    = i - 1 >= 0 ? grid[i - 1][j] : 0;
//       const bottom = i + 1 < grid.length ? grid[i + 1][j] : 0;
//       const left   = j - 1 >= 0 ? grid[i][j - 1] : 0;
//       const right  = j + 1 < rows.length ? grid[i][j + 1] : 0;
//       if (!top) {
//         count++;
//       }
//       if (!bottom) {
//         count++;
//       }
//       if (!left) {
//         count++;
//       }
//       if (!right) {
//         count++;
//       }
//     }
//   }

//   return count;
// };

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let startPoint = findStartPoint(grid);

  const visited = new Set();
  visited.add(cellToKey(startPoint, grid));
  const queue = [startPoint];
  let res = 0;
  while (queue.length > 0) {
    // go to the current point and calculate the edge of it

    let currentPoint = queue[0];
    const [x, y] = currentPoint;

    // top
    if (x - 1 === -1 || grid[x - 1][y] === 0) {
      res++;
    } else if (!visited.has(cellToKey([x - 1, y], grid))) {
      queue.push([x - 1, y]);
      visited.add(cellToKey([x - 1, y], grid));
    }

    // bottom
    if (x + 1 === grid.length || grid[x + 1][y] === 0) {
      res++;
    } else if (!visited.has(cellToKey([x + 1, y], grid))) {
      queue.push([x + 1, y]);
      visited.add(cellToKey([x + 1, y], grid));
    }

    // left
    if (y - 1 === -1 || grid[x][y - 1] === 0) {
      res++;
    } else if (!visited.has(cellToKey([x, y - 1], grid))) {
      queue.push([x, y - 1]);
      visited.add(cellToKey([x, y - 1], grid));
    }

    // right
    if (y + 1 === grid[x].length || grid[x][y + 1] === 0) {
      res++;
    } else if (!visited.has(cellToKey([x, y + 1], grid))) {
      queue.push([x, y + 1]);
      visited.add(cellToKey([x, y + 1], grid));
    }

    queue.shift();
  }

  return res;
};

/**
 *
 * @param {number[]} arr
 */
const cellToKey = (arr, grid) => {
  return arr[0] * grid[arr[0]].length + arr[1];
};

const findStartPoint = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        return [i, j];
      }
    }
  }
};

// console.log(
//   islandPerimeter([
//     [0, 1, 0, 0],
//     [1, 1, 1, 0],
//     [0, 1, 0, 0],
//     [1, 1, 0, 0],
//   ])
// );

// console.log(islandPerimeter([[1]]));

// console.log(islandPerimeter([[1, 0]]));

console.log(
  islandPerimeter([
    [0, 0, 1],
    [1, 1, 1],
  ])
);
