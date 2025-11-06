/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let digits = [];
  let cloneNum = num;
  while (cloneNum > 0) {
    const x = cloneNum % 10;
    cloneNum = Math.floor(cloneNum / 10);
    digits = [x, ...digits];
  }
  let l;
  let r;
  let cnt = 0;
  for (let i = 0; i <= digits.length - k; i++) {
    l = i;
    r = l + k;
    const dominator = Number(digits.slice(l, r).join(""));
    if (num % dominator === 0) cnt++;
  }
  return cnt;
};

console.log(divisorSubstrings(240, 2));
console.log(divisorSubstrings(430043, 2));
