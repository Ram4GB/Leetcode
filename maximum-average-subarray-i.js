/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let average = 0;
  for (let i = 0 ; i < k; i++) {
    average = average + (nums[i]/k);
  }
  let max = average;
  for (let i = k; i < nums.length; i++) {
    average = average - (nums[i-k] / k) + (nums[i]/k)
    if (average > max) {
      max = average;
    }
  }
  return max;
};

// console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
// console.log(findMaxAverage([1,12,-5,-6], 4))
// console.log(findMaxAverage([1,12], 2))
console.log(findMaxAverage([1,2], 1))
