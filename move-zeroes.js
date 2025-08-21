/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let z=0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]!==0) {
      while(nums[z]!==0&&z<i) z++;
      if (z!==i) {
        nums[z] = nums[i];
        nums[i] = 0;
      }
    }
  }
  return nums;
};

// 0 0 1 0 3 0 12
// console.log("moveZeroes", moveZeroes([0, 1, 0, 3, 12]));
// i=0,j=1;
// 1 0 0 3 12
// i=1,j=3
// 1 3 0 0 12
// i=2,j=4
console.log("moveZeroes", moveZeroes([0]));
console.log("moveZeroes", moveZeroes([1]));
console.log(moveZeroes([1,0]))
