/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const fRow = new Set('qwertyuiopQWERTYUIOP');
    const sRow = new Set('asdfghjklASDFGHJKL');

    const getRowNumFromChar = (c) => {
      if (fRow.has(c)) {
        return 1;
      } else if (sRow.has(c)) {
        return 2;
      } else {
        return 3;
      }
    }

    const res = []
    
    for (let i = 0 ; i < words.length; i++) {
      const word = words[i];
      const prevChar = word[0];
      let belongToRow = getRowNumFromChar(prevChar);
      let flag = true;
      for (let i = 1 ; i < word.length; i++) {
        const char = word[i];
        const btr = getRowNumFromChar(char);
        if (btr !== belongToRow) {
          flag = false;
          break;
        }
      }
      if (flag) {
        res.push(word);
      }
    }
    return res;
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]))
console.log(findWords(["adsdf","sfd"]))
console.log(findWords(["omk"]))