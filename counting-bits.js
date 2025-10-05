/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  let ans = 1;
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    let num = i;
    let c = 0;
    while (num > 0) {
      if (dp[num] !== undefined) {
        c = c + dp[num];
        break;
      }
      const r = num % 2;
      num = Math.floor(num / 2);
      if (r === 1) c++;
    }
    ans = ans + c;
    dp.push(c);
  }
  return dp;
};

console.log("countBits(2)", countBits(2));
console.log("countBits(3)", countBits(3));
console.log("countBits(4", countBits(4));
console.log("countBits(5)", countBits(5));
console.log("countBits(11)", countBits(11));
