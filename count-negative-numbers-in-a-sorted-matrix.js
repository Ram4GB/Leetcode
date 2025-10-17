/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    let arr = grid[i];
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (arr[mid] >= 0) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    console.log(l, r);
    if (arr[l] < 0) ans = ans + (arr.length - 1) - l + 1;
  }
  return ans;
};

console.log(
  countNegatives([
    [3, -1, -3, -3, -3],
    [2, -2, -3, -3, -3],
    [1, -2, -3, -3, -3],
    [0, -3, -3, -3, -3],
  ])
);

// console.log(
//   countNegatives([
//     [4, 3, 2, -1],
//     [3, 2, 1, -1],
//     [1, 1, -1, -2],
//     [-1, -1, -2, -3],
//   ])
// );

// console.log(
//   countNegatives([
//     [3, 2],
//     [1, 0],
//   ])
// );
