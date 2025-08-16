/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let mid;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return nums[mid] > target ? mid : mid + 1;
};

console.log("searchInsert", searchInsert([1, 3, 5, 6], 5)); //2
console.log("searchInsert", searchInsert([1, 3, 5, 6], 2)); //1
console.log("searchInsert", searchInsert([1, 3, 5, 6], 7)); //4
console.log("searchInsert", searchInsert([1, 3, 5, 6, 7], 2)); //1
console.log("searchInsert", searchInsert([1, 3, 5, 6, 7], 8)); //5
console.log("searchInsert", searchInsert([1, 3, 5, 6, 7], 4)); //2
