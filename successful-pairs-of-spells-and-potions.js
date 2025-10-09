/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  const ans = []
  for (let i = 0; i < spells.length; i++) {
    const spell = spells[i];
    let c = 0;
    for (let j = 0; j < potions.length; j++) {
      if (spell * potions[j] >= success) {
        c++;
      }
    }
    ans.push(c)
  }
  return ans;
};

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16));
