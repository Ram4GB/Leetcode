/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
  const alphabet = Array.from({ length: 26 }).fill(0);
  const scoreMap = new Map();

  for (let i = 0; i < letters.length; i++) {
    alphabet[letters[i].charCodeAt(0) % 97]++;
  }

  const map = new Map();
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordMap = new Map();
    let sum = 0;
    for (let j = 0; j < word.length; j++) {
      if (!wordMap.has(word[j])) {
        wordMap.set(word[j], 1);
      } else {
        wordMap.set(word[j], wordMap.get(word[j]) + 1);
      }
      sum = sum + score[word[j].charCodeAt(0) % 97];
    }
    scoreMap.set(word, sum);
    map.set(word, wordMap);
  }

  // console.log("map", map);
  // console.log("alphabet", alphabet);
  // console.log("scoreMap", scoreMap);

  const checkIfEnoughWord = (word) => {
    for (let [key, value] of word) {
      const idx = key.charCodeAt(0) % 97;
      if (alphabet[idx] === 0 || alphabet[idx] < value) return false;
    }
    return true;
  };

  const calculate = (word) => {
    for (let [key, value] of word) {
      const idx = key.charCodeAt(0) % 97;
      alphabet[idx] = alphabet[idx] - value;
    }
  };

  const revert = (word) => {
    for (let [key, value] of word) {
      const idx = key.charCodeAt(0) % 97;
      alphabet[idx] = alphabet[idx] + value;
    }
  };

  let max = -1;

  /**
   * @param {string[]} arr
   * @param {number} s
   */
  const backtracking = (arr, s, sum) => {
    if (max < sum) {
      max = sum;
    }

    for (let i = s; i < words.length; i++) {
      // check if we have enough alphabet to construct the words
      const word = words[i];
      if (!checkIfEnoughWord(map.get(word))) {
        continue;
      }
      arr.push(word);
      calculate(map.get(word));
      sum = sum + scoreMap.get(word);
      backtracking(arr, i + 1, sum);
      revert(map.get(word));
      sum = sum - scoreMap.get(word);
      arr.pop();
    }
  };

  backtracking([], 0, 0);

  return max;
};

console.log(
  maxScoreWords(
    ["dog", "cat", "dad", "good"],
    ["a", "a", "c", "d", "d", "d", "g", "o", "o"],
    [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  )
);
