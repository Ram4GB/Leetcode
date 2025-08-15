/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => a-b);

    let sum = 0;
    for (let i = 0 ; i < nums.length; i+=2) {
      sum += nums[i];
    }

    return sum;
};

// [6,2,6,5,1,2]
// [1,2,2,5,6,6]
// [1,2] 1 // 0
// [2,5] 2 // 2
// [6,6] 6 // 4

console.log(arrayPairSum([6,2,6,5,1,2]))
console.log(arrayPairSum([1,4,3,2]))