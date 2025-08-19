/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let i=0,j=0;
    let sum = 0;
    while (j <= nums.length) {
      if (nums[j] !== 0) {
        if (i !== j) {
          sum = sum + Math.floor((j - i) * (j - i + 1) / 2);
        }
        i=j+1;
      }
      j++;
    }
    return sum;
};

console.log(zeroFilledSubarray([1,3,0,0,2,0,0,4]));
console.log(zeroFilledSubarray([1,3,0,0,2,0,0,0]));