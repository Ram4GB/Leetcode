/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const hash = new Map();
    for (let i = 0 ; i < nums.length; i++) {
      if (hash.has(nums[i])) {
        hash.set(nums[i], hash.get(nums[i])+1)
      } else {
        hash.set(nums[i], 1)      
      }
    }

    let max = 0;
    for (let i = 0 ; i < nums.length; i++) {
      let maxValidNum = nums[i] + 1;
      if (!hash.has(maxValidNum)) continue;
      let c = hash.get(maxValidNum) + hash.get(nums[i]);
      if (c > max) {
        max = c;
      }
    }

    return max;
};

// how about using dynamic programming?

console.log(findLHS([1,3,2,2,5,2,3,7]));
console.log(findLHS([1,1,1,1,1,1,1]));
console.log(findLHS([1,1,1,1,1,1,2]));
console.log(findLHS([1,3,1,3,1,3,2,3,4]));