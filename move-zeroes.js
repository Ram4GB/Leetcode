/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // two pointers
  let i = 0;
  let j;
  let len = nums.length;
  while (i < len) {
    while (nums[i] !== 0 && i < len) {
      i++;
    }
    if (i === len - 1) break;
    if (!j) j = i + 1;
    while (nums[j] === 0 && j < len) {
      j++;
    }
    if (j > len - 1) break;
    const z = nums[i];
    nums[i] = nums[j];
    nums[j] = z;
    i++;
    j++;
  }

  return nums;
};

const t0 = performance.now();
console.log("moveZeroes", moveZeroes([0, 1, 0, 3, 12])); // [ 1, 3, 12, 0, 0 ]
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

console.log("moveZeroes", moveZeroes([0]));
console.log("moveZeroes", moveZeroes([1]));
