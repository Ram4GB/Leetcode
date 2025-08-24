/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let i = 0,
    j = 0,
    cz = 0;
  let max = Number.MIN_SAFE_INTEGER;
  while (j < nums.length) {
    if (nums[j] === 0 && cz === 1) {
      cz = nums[i] === 0 ? 0 : 1;
      i++;
    } else {
      if (nums[j] === 0) cz++;
      const countOne = j - i;
      if (max < countOne) max = countOne;
      j++;
    }
  }
  return max;
};

// console.log(longestSubarray([1,1,0,1]))

// console.log(longestSubarray([0,1,1,1,0,1,1,0,1]))

console.log(longestSubarray([1,1,1]))