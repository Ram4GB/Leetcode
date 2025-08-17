/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const maxType = candyType.length;
    const hash = new Set();
    for (let i = 0 ; i < candyType.length; i++) {
      hash.add(candyType[i]);
    }
    return Math.min(Math.floor(maxType/2), hash.size)
};

console.log(distributeCandies([1,1,2,2,3,3]))
console.log(distributeCandies([1,1,1,1,1,1]))
console.log(distributeCandies([1,1,1,1,1,2]))