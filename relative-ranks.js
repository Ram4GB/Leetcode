/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const rank = [...score].sort((a,b) => b-a);

    const hash = new Map();
    for (let i = 0 ; i < rank.length; i++) {
      hash.set(rank[i], i+1)
    }

    const res = [];
    for (let i = 0 ; i < score.length; i++) {
      if (hash.get(score[i]) === 1) {
        res.push('Gold Medal')
      } else if (hash.get(score[i]) === 2) {
        res.push('Silver Medal')
      } else if (hash.get(score[i]) === 3) {
        res.push('Bronze Medal')
      } else {
        res.push(`${hash.get(score[i])}`)
      }
    }

    return res;
};

console.log(findRelativeRanks([5,4,3,2,1]))
console.log(findRelativeRanks([10,3,8,9,4]))