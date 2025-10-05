/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let dp = [1, 1, 1, 1, 1];
  for (let i = 2; i <= n; i++) {
    const arr = Array.from({ length: dp.length });
    for (let j = 0; j < 5; j++) {
      arr[j] = dp.slice(j).reduce((prev, cur) => prev + cur, 0);
    }
    dp = arr;
  }
  return dp.reduce((prev, cur) => prev + cur, 0);
};

console.log(countVowelStrings(1));
console.log(countVowelStrings(2));
console.log(countVowelStrings(3));
console.log(countVowelStrings(33));
