/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const cost = [triangle[0]];
  for (let i = 1; i < triangle.length; i++) {
    const arr = [];
    arr[0] = triangle[i][0] + cost[i - 1][0];
    arr[triangle[i].length - 1] = triangle[i][triangle[i].length - 1] + cost[i - 1][cost[i - 1].length - 1];
    for (let j = 1; j < triangle[i].length - 1; j++) {
      arr[j] = triangle[i][j] + Math.min(cost[i - 1][j], cost[i - 1][j - 1]);
    }
    cost.push(arr);
  }
  return Math.min(...cost[cost.length - 1]);
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])); // 11
console.log(minimumTotal([[-10]]));
console.log(minimumTotal([[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]]));
