/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let l = 0;
  let r = 0;

  const len = Math.min(arr.length, k);

  for (let i = 0; i < len; i++) {
    sum = sum + dis(arr[i], x);
    r++;
  }

  min = sum;

  for (let i = r; i < arr.length; i++) {
    let last = arr[i];
    let first = arr[i - k];
    sum = sum - dis(first, x) + dis(last, x);
    if (min > sum) {
      l = i - k + 1;
      r = i + 1;
      min = sum;
    }
  }

  return arr.slice(l, r);
};

const dis = (a, b) => Math.abs(a - b);

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1));
console.log(findClosestElements([], 5, 0));
console.log(findClosestElements([], 1, -1));
console.log(findClosestElements([1, 2], 1, 1)); // [1]
console.log(findClosestElements([2, 2, 2, 2, -1, 2], 3, -1));
console.log(findClosestElements([1, 1, 1, 0, -1, 0, 0, 0], 3, -1));
