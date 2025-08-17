/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  if (ops.length === 0) return m * n;
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);
  for (let i = 0 ; i < ops.length; i++) {
    const op = ops[i];
    for (let x = 0 ; x < op[0]; x++) {
      rows[x]++;
    }

    for (let x = 0 ; x < op[1]; x++) {
      cols[x]++;
    }
  }

  const max = rows[0];
  
  let countMaxRow = 0;
  for (let x = 0 ; x < rows.length; x++) {
    if (max === rows[x]) {
      countMaxRow++
    } else break;
  }

  let countMaxCol = 0;
  for (let x = 0 ; x < cols.length; x++) {
    if (max === cols[x]) {
      countMaxCol++
    } else break;
  }

  console.log(rows, cols)
  
  return countMaxCol * countMaxRow;
};

// console.log(maxCount(3,3,[[2,2],[3,3]]))
console.log(maxCount(3,3,[[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]))
// console.log(maxCount(3,3,[]))
console.log(maxCount(26, 17, [[20,10],[26,11],[2,11],[4,16],[2,3],[23,13],[7,15],[11,11],[25,13],[11,13],[13,11],[13,16],[26,17]]))