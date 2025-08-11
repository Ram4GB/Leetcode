// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseVowels = function (s) {
//   const vowels = new Set(["a", "o", "e", "u", "i", "A", "O", "E", "U", "I"]);
//   const vowelInList = [];
//   let res = "";

//   for (let i = 0; i < s.length; i++) {
//     if (vowels.has(s[i])) {
//       vowelInList.push(s[i]);
//     }
//   }

//   let idx = vowelInList.length - 1;
//   for (let i = 0; i < s.length; i++) {
//     if (vowels.has(s[i])) {
//       res += vowelInList[idx];
//       idx--;
//     } else {
//       res += s[i];
//     }
//   }

//   return res;
// };

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseVowels = function (s) {
//   const vowels = new Set(["a", "o", "e", "u", "i", "A", "O", "E", "U", "I"]);
//   // const arr = [];
//   // for (let i = 0; i < s.length; i++) {
//   //   arr.push(s[i]);
//   // }

//   const arr = s.split("");

//   let l = 0;
//   let r = arr.length - 1;
//   while (l < r) {
//     if (vowels.has(arr[l]) && vowels.has(arr[r])) {
//       const z = arr[l];
//       arr[l] = arr[r];
//       arr[r] = z;
//       l++;
//       r--;
//     } else if (!vowels.has(arr[l]) && vowels.has(arr[r])) {
//       l++;
//     } else if (vowels.has(arr[l]) && !vowels.has(arr[r])) {
//       r--;
//     } else {
//       // both arr[l] and arr[r] are not vowel
//       l++;
//       r--;
//     }
//   }

//   return arr.join("");
// };

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const arr = new Array(s.length);
  let l = 0;
  let r = s.length - 1;
  const vowels = new Set(["a", "o", "e", "u", "i", "A", "O", "E", "U", "I"]);

  while (l <= r) {
    const lc = vowels.has(s[l]);
    const rc = vowels.has(s[r]);
    if (lc && rc) {
      arr[l] = s[r];
      arr[r] = s[l];
      l++;
      r--;
    } else if (!lc && rc) {
      arr[l] = s[l];
      l++;
    } else if (lc && !rc) {
      arr[r] = s[r];
      r--;
    } else {
      // both arr[l] and arr[r] are not vowel
      arr[l] = s[l];
      arr[r] = s[r];
      l++;
      r--;
    }
  }
  return arr.join("");
};

console.log("reverseVowels", reverseVowels("IceCreAm")); // AceCreIm
console.log("reverseVowels", reverseVowels("leetcode")); // leotcede
console.log("reverseVowels", reverseVowels(" ")); //
console.log("reverseVowels", reverseVowels(".")); //
