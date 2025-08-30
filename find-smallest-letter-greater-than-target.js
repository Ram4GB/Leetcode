/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let res = null;
  for (let i = 0 ; i < letters.length; i++) {
    if(letters[i] > target && (letters[i] < res || !res)) {
      res = letters[i];
    }
  }
  return res ? res : letters[0];
};

console.log(nextGreatestLetter(["c","f","j"], 'a'))
console.log(nextGreatestLetter(["c","f","j"], 'c'))
console.log(nextGreatestLetter(["x","x","y","y"], 'z'))