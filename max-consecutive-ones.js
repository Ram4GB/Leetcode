/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let count = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0 ; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    if (max < count) {
      max = count;
    }

  }
  return max;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))