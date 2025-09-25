/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const matrix = [triangle[0]];
  for (let i = 1; i < triangle.length; i++) {
    const arr = Array.from({ length: triangle[i].length }).fill(0);
    for (let j = 0; j < triangle[i].length; j++) {
      const num = triangle[i][j];
      // Find min between triangle[i-1][j] and triangle[i-1][j - 1];
      let min = null;
      if (j - 1 < 0) {
        min = matrix[i - 1][j];
      } else if (j === triangle[i - 1].length) {
        min = matrix[i - 1][j - 1];
      } else {
        min = Math.min(matrix[i - 1][[j]], matrix[i - 1][j - 1]);
      }
      arr[j] = num + min;
    }
    matrix.push(arr);
  }
  return Math.min(...matrix[matrix.length - 1]);
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
