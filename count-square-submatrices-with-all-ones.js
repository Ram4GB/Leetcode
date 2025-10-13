/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  let cnt = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        continue;
      }
      cnt++;
      let flag = true;
      let w = 2;
      while (flag && i + w <= matrix.length && j + w <= matrix[i].length) {
        for (let x = i; x < Math.min(i + w, matrix.length); x++) {
          for (let y = j; y < Math.min(j + w, matrix[x].length); y++) {
            if (matrix[x][y] === 0) {
              flag = false;
              break;
            }
          }
        }
        if (flag) {
          cnt++;
          w++;
        }
      }
    }
  }
  return cnt;
};

console.log(
  countSquares([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
  ])
);

console.log(
  countSquares([
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 0],
  ])
);
