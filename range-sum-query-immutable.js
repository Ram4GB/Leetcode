/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  const prefix = Array.from({ length: this.nums.length }).fill(0);
  prefix[0] = this.nums[0];
  for (let i = 1; i < this.nums.length; i++) {
    prefix[i] = this.nums[i] + prefix[i - 1];
  }
  this.prefix = prefix;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.prefix[right] - (left - 1 >= 0 ? this.prefix[left - 1] : 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

const obj = new NumArray([1, 2, 3, 4, 5]);
console.log(obj.sumRange(0, 1));
