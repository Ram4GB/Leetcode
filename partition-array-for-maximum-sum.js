/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  let ans = -1;
  const backtracking = (s, sum) => {
    if (s === arr.length) {
      if (sum > ans) {
        ans = sum;
      }
    }
    for (let i = s; i < Math.min(s + k, arr.length); i++) {
      const subArr = arr.slice(s, i + 1);
      const total = Math.max(...subArr) * subArr.length;
      sum = sum + total;
      backtracking(i + 1, sum);
      sum = sum - total;
    }
  };

  backtracking(0, 0);

  return ans;
};

console.log(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3));
// 
// console.log(maxSumAfterPartitioning([1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], 4));
// console.log(maxSumAfterPartitioning([1], 1));