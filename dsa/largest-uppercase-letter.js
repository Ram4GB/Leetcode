/**
 * @param {string} s
 */
const largestUppercaseLetter = (s) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerChars = Array.from({ length: 26 }).fill(false);
    const upperChars = Array.from({ length: 26 }).fill(false);
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            lowerChars[charCode % 97] = true;
        } else {
            upperChars[charCode % 65] = true;
        }
    }
    for (let i = lowerChars.length - 1; i >= 0; i--) {
      if (lowerChars[i] && upperChars[i]) {
        return alphabet[i];
      }
    }
    return 'NO';
};

console.log(largestUppercaseLetter("aaBabcDaA"));
console.log(largestUppercaseLetter('Codility'));
console.log(largestUppercaseLetter('WeTestCodErs'))
console.log(largestUppercaseLetter('WeTestCodErsAaBbZz'))
