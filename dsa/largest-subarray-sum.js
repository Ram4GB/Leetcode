/**
 * @param {number[]} arr
 */
const largestSubArraySum = (arr) => {
  // create a prefix sum
  const prefix = [0];
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    prefix.push(arr[i] + prefix[i]);
    if (!map.has(arr[i])) {
      map.set(arr[i], [i]);
    } else {
      map.get(arr[i]).push(i);
    }
  }

  let max = -1;
  for (let [, values] of map) {
    if (values.length >= 2) {
      let l = values[0];
      let r = values[values.length - 1];
      const sum = prefix[r + 1] - prefix[l];
      if (sum > max) {
        max = sum;
      }
    }
  }

  return max;
};

console.log('largestSubArraySum([1, 3, 6, 5, 4, 1])', largestSubArraySum([1, 3, 6, 5, 4, 1]));
console.log('largestSubArraySum([1, 3, 6, 1])', largestSubArraySum([1, 3, 6, 1]));
console.log('largestSubArraySum([6, 1, 6])', largestSubArraySum([6, 1, 6]));
console.log('largestSubArraySum([6, 1, 6, 6])', largestSubArraySum([6, 1, 6, 6]));
console.log('largestSubArraySum([6, 6])', largestSubArraySum([6, 6]));
console.log('largestSubArraySum([5,1,4,3])', largestSubArraySum([5,1,4,3]));
console.log('largestSubArraySum([2,2,2,3,2,3])', largestSubArraySum([2,2,2,3,2,3]));
