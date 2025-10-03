/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  const seen = new Set(s);
  for (let i = 0; i < s.length; i++) {
    if (seen.has(s[i].toLowerCase()) && seen.has(s[i].toUpperCase())) {
      continue;
    }
    const left = longestNiceSubstring(s.slice(0, i));
    const right = longestNiceSubstring(s.slice(i + 1));
    return left.length >= right.length ? left : right;
  }
  return s;
};

console.log(longestNiceSubstring("YazaAay"));
console.log(longestNiceSubstring("Bb"));
console.log(longestNiceSubstring("yYzaA"));

// Ya
// Y -> ""
// a -> ""

// aAay -> aAa
// aAa
// "" -> ""

// -> aAa