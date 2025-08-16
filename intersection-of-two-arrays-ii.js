/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;

  let longestArr;
  let shortestArr;

  if (len1 > len2) {
    longestArr = nums1;
    shortestArr = nums2;
  } else {
    longestArr = nums2;
    shortestArr = nums1;
  }

  // { 1: 1, 3: 2 }
  const map = new Map();
  for (let i = 0; i < longestArr.length; i++) {
    const num = longestArr[i];
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  const res = [];
  for (let i = 0; i < shortestArr.length; i++) {
    const n = shortestArr[i];
    if (map.has(n) && map.get(n) > 0) {
      res.push(n);
      map.set(n, map.get(n) - 1);
    }
  }

  return res;
};

console.log("intersection", intersect([1, 2, 2, 1], [2, 2])); // [2]
console.log("intersection", intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [9,4]
console.log("intersection", intersect([], [])); // []
console.log("intersection", intersect([], [1])); // []
