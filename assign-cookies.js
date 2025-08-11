/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  return recursive(g, s, 0, 0);
};

/**
 * @param {number[]} g
 * @param {number} s
 * @param {number} i
 * @param {number} count
 * @return {number}
 */
const recursive = (g, s, i, count) => {
  if (i > s.length || g.length === 0) return count;
  for (let j = 0; j < g.length; j++) {
    if (s[i] >= g[j]) {
      g.splice(j, 1);
      count++;
      i++;
      return recursive(g, s, i, count);
    }
  }
  i++;
  return recursive(g, s, i, count);
};
