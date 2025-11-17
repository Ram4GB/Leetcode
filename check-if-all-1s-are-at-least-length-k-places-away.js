/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let l = 0;
  while (nums[l] === 0) l++;
  let r = l + 1;
  while (r < nums.length) {
    if (nums[r] === 0) {
      r++;
    } else {
      const cnt = r - l - 1;
      if (cnt < k) {
        return false;
      } else {
        l = r;
        r = l + 1;
      }
    }
  }
  return true;
};

console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2));
console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2));
console.log(kLengthApart([1, 0, 1, 0, 1], 1));
console.log(kLengthApart([1, 0, 1, 0, 0, 1], 1));
console.log(kLengthApart([1, 0, 1, 1], 1));
console.log(kLengthApart([1, 0, 0, 0], 1));
