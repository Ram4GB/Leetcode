/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const hash = new Map();
  let duplicatedNumber = -1;
  for (let i = 0 ; i < nums.length; i++) {
    if (!hash.has(nums[i])) {
      hash.set(nums[i], 1);
    } else {
      duplicatedNumber=nums[i];
    }
  }

  for (let i = 0 ; i < nums.length; i++) {
    if(!hash.has(i+1)) {
      return [duplicatedNumber, i+1];
    }
  }

  return res;
};