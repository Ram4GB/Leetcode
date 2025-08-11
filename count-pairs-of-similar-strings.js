/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    const keyA = parseKey(words[i]);
    for (let j = i + 1; j < words.length; j++) {
      const keyB = parseKey(words[j]);
      if (keyA === keyB) {
        count++;
      }
    }
  }
  return count;
};

const parseKey = (s) => {
  const hash = new Set();
  for (let i = 0; i < s.length; i++) {
    hash.add(s[i]);
  }
  return Array.from(hash.keys())
    .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
    .toString();
};

console.log("similarPairs", similarPairs(["aabb", "ab", "ba"]));
console.log(
  "similarPairs",
  similarPairs(["aba", "aabb", "abcd", "bac", "aabc"])
);
