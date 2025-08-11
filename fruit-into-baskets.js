/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let r = 0;
  let l = 0;
  const hash = new Map();
  let max = 0;
  let sum = 0;

  while (r < fruits.length) {
    const count = hash.size;
    if (count < 2 || (count == 2 && hash.has(fruits[r]))) {
      hash.set(fruits[r], hash.has(fruits[r]) ? hash.get(fruits[r]) + 1 : 1);
      r++;
      sum++;
      max = Math.max(max, sum);
    } else {
      let c = hash.size;
      while (c === 2) {
        hash.set(fruits[l], hash.get(fruits[l]) - 1);
        if (hash.get(fruits[l]) === 0) {
          hash.delete(fruits[l]);
        }
        l++;
        sum--;
        c = hash.size;
      }
    }
  }

  return max;
};

// console.log("totalFruit([0, 1, 2, 2])", totalFruit([0, 1, 2, 2]));
// console.log("[1,2,3,2,2]", totalFruit([1, 2, 3, 2, 2]));
// console.log("totalFruit([1, 2, 1])", totalFruit([1, 2, 1]]));
console.log("totalFruit", totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
