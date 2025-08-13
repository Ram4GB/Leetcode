/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let c = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0 ; i < nums.length; i++) {
    const n = nums[i];
    if (n === 1) {
      c++;
    } else {
      if (max < c) {
        max = c;
      }
      c = 0;
    }
  }
  return max < c ? c : max;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])) // 3
console.log(findMaxConsecutiveOnes([1,1,0,0])) // 2
console.log(findMaxConsecutiveOnes([1,1,0,1])) // 2
console.log(findMaxConsecutiveOnes([0,0,1,0])) // 1
console.log(findMaxConsecutiveOnes([1])) // 1
console.log(findMaxConsecutiveOnes([0,0]))
console.log(findMaxConsecutiveOnes([1,0]))