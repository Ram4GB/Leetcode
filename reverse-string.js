/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const len = Math.floor(s.length / 2);
  for (let i = 0; i < len; i++) {
    const z = s[s.length - 1 - i];
    s[s.length - i - 1] = s[i];
    s[i] = z;
  }
  return s;
};

console.log("reverseString", reverseString(["h", "e", "l", "l", "o"]));
console.log("reverseString", reverseString(["a"]));
