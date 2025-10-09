/**
 * @param {number[]} d
 * @param {number} x
 */
const missionGame = (d, x) => {
  let l = 0;
  let r = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  const ans = [];
  while (l < d.length && r < d.length) {
    if (d[r] > max) {
      max = d[r];
    }
    if (d[r] < min) {
      min = d[r];
    }
    if (max - min <= x) {
      r++;
    } else {
      ans.push(d.slice(l, r));
      l = r;
      max = min = d[r];
    }
  }

  ans.push(d.slice(l, r));

  return {
    total: ans.length,
    list: ans,
  };
};

console.log(missionGame([5, 8, 2, 7], 3));
console.log(missionGame([2, 5, 9, 2, 1, 4], 4));
console.log(missionGame([1, 12, 10, 4, 5, 2], 2));
console.log(missionGame([1], 2));
console.log(missionGame([4, 1], 2));
console.log(missionGame([1, 4, 1, 4, 1, 4], 2));
console.log(missionGame([1, 4, 1, 3, 1, 4], 2));
