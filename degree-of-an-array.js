/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  // store the frequent of the element in the nums
  const hash=new Map();
  for (let i = 0 ; i < nums.length; i++) {
    if (!hash.has(nums[i])) {
      hash.set(nums[i], [i])
    } else {
      hash.get(nums[i]).push(i);
    }
  }

  const keys = Array.from(hash.keys());
  let min = Number.MAX_SAFE_INTEGER;
  let maxLen = Number.MIN_SAFE_INTEGER;
  for (let i = 0 ; i < keys.length; i++) {
    let value = hash.get(keys[i]);
    if (maxLen <= value.length) {
      const start = value[0];
      const end = value[value.length-1];
      if (maxLen < value.length) {
        min=end-start+1;
      } else if (maxLen === value.length) {
        if (min > end-start+1) min = end-start+1;
      }
      maxLen = value.length;
    } 
  }
  return min;
};

// console.log(findShortestSubArray([1,2,2,3,1]))
console.log(findShortestSubArray([1,2,2,3,1,4,2]))
console.log(findShortestSubArray([1]))
console.log(findShortestSubArray([2,1]))