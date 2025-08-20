/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (nums.length === 1) return 1;
  let j=1;
  let c=1;
  let maxSub=nums[0];
  let res = Number.MIN_SAFE_INTEGER;
  while(j < nums.length) {
    if (maxSub < nums[j]) {
      maxSub=nums[j]
      c++;
    } else {
      if (res < c) {
        res = c;
      }
      c=1;
      maxSub=nums[j];
    }
    j++;
  }
  return c >  res ? c:  res;
};


console.log(findLengthOfLCIS([1,3,5,4,7]))
console.log(findLengthOfLCIS([1]))
console.log(findLengthOfLCIS([1,2,3,4,5,55,5,5,1,2,3,4,5,6]))