/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (nums.length === 1) return 0;
  nums.sort((a, b) => b - a);

  let max = nums[0];
  let min = nums[k - 1];
  let diff = max - min;
  let ans = diff;
  for (let i = 1; i <= nums.length - k; i++) {
    max = nums[i];
    min = nums[i + k - 1];
    diff = max - min;
    if (ans > diff) {
      ans = diff;
    }
  }
  return ans;
};

// 1 2 4 5 6 8
console.log(minimumDifference([1, 2, 6, 4, 5, 8], 5));
