/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const hash = new Set(nums);
  const res = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!hash.has(i)) {
      res.push(i);
    }
  }

  return res;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
console.log(findDisappearedNumbers([]));
console.log(findDisappearedNumbers([]));
