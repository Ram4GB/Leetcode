/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = nums[0];
  let max = nums[0];
  let i = 1;
  while (i < nums.length) {
    if (sum >= 0) {
      sum = sum + nums[i];
      i++;
    } else {
      sum = nums[i];
      i++;
    }
    if (max < sum) {
      max = sum;
    }
  }
  return max;
};

// https://www.geeksforgeeks.org/dsa/largest-sum-contiguous-subarray/
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])) // 1
console.log(maxSubArray([5,4,-1,7,8])) // 23