/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let i=0,j=0;
    let sum = 0;
    let c = 0;
    while (j <= nums.length) {
      if (nums[j] !== 0) {
        j++;
        i=j;
        sum = sum + Math.floor(c * (c+1) / 2)  
        c=0;
      } else {
        j++;
        c++;
      }
    }
    return sum;
};

console.log(zeroFilledSubarray([1,3,0,0,2,0,0,4]));
console.log(zeroFilledSubarray([1,3,0,0,2,0,0,0]));