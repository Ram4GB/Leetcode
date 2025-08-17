/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  if (ops.length === 0) return m * n;
  let minRowIndex = Number.MAX_SAFE_INTEGER;
  let minColIndex = Number.MAX_SAFE_INTEGER;
  for (let i = 0 ; i < ops.length; i++) {
    const op = ops[i];
    if (op[1] < minColIndex) minColIndex=op[1];
    if (op[0] < minRowIndex) minRowIndex=op[0];
  }
  return minColIndex*minRowIndex
};

// console.log(maxCount(3,3,[[2,2],[3,3]]))
console.log(maxCount(3,3,[[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]))
// console.log(maxCount(3,3,[]))
console.log(maxCount(26, 17, [[20,10],[26,11],[2,11],[4,16],[2,3],[23,13],[7,15],[11,11],[25,13],[11,13],[13,11],[13,16],[26,17]]))