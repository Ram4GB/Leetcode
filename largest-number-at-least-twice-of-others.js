/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max1Idx = -1;
    let max2Idx = -1;

    if (nums[0] > nums[1]) {
      max1Idx = 0;
      max2Idx = 1;
    } else {
      max1Idx = 1;
      max2Idx = 0;
    }

    // max1 > max2
    for (let i = 2 ; i < nums.length; i++) {
      if (nums[i] > nums[max1Idx]) {
        max2Idx = max1Idx;
        max1Idx = i;
      } else if (nums[max1Idx] > nums[i] && nums[i] > nums[max2Idx]) {
        max2Idx = i;
      }
    }
    
    return nums[max1Idx] >= nums[max2Idx] * 2 ? max1Idx : -1;
};

console.log(dominantIndex([3,6,1,0]))
console.log(dominantIndex([1,2,3,4]))

// -8 -4 -2