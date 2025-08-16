/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let max1 = Number.MIN_SAFE_INTEGER;
  let max2 = Number.MIN_SAFE_INTEGER;
  let max3 = Number.MIN_SAFE_INTEGER;

  if (nums.length === 1) return nums[0];

  if (nums.length === 2) {
    if (nums[0] > nums[1]) {
      return nums[0];
    } else {
      return nums[1];
    }
  }

  // max3 > max2 > max1

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > max3) {
      max1 = max2;
      max2 = max3;
      max3 = num;
    } else if (num > max2 && num < max3) {
      max1 = max2;
      max2 = num;
    } else if (num > max1 && num < max2) {
      max1 = num;
    }
  }

  const getMax = () => {
    if (max1 !== Number.MIN_SAFE_INTEGER) {
      return max1;
    }
    return max3;
  };

  return getMax();
};

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
console.log(thirdMax([5, 0])); // 5
console.log(thirdMax([5, 7, 9, 6, 8, 1, 3, 2])); // 7
console.log(thirdMax([1, 1, 2])); //2
