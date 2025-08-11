/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;

  const hash = {};
  let maxSubStr = -1;
  let l = 0;
  let r = 0;

  while (l <= r && r < s.length) {
    if (!hash[s[r]]) {
      hash[s[r]] = true;
      maxSubStr = Math.max(maxSubStr, r - l + 1);
      r++;
    } else {
      const lChar = s[l];
      delete hash[lChar];
      l++;
    }
  }

  return maxSubStr;
};

console.log(lengthOfLongestSubstring("bbbbb"));
