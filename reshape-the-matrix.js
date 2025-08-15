/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    // check if the reshape requirement is valid
    const totalCell = mat.length * mat[0].length;
    if (r * c !== totalCell) return mat;

    const res = [];
    let row = 0;
    let col = 0;
    const originalRow = mat.length;
    const originalCol = mat[0].length;
    for (let i = 0 ; i < r; i++) {
      const arr = [];
      for (let j = 0 ; j < c; j++) {
        if (col === originalCol-1) {
          arr.push(mat[row][col]);
          col = 0;
          row++;
        } else {
          arr.push(mat[row][col]);
          col++;
        }
        
      }
      res.push(arr);
    }
    return res;
};

// [[1,2,3,4], [5,6,7,8]] // r=2 c=3 // [[1,2],[3,4]]
// mat.length * mat[0].length = 2 * 4 = 8 -> valid

console.log(matrixReshape([[1,2],[3,4]], 1, 4))
console.log(matrixReshape([[1,2],[3,4]], 2, 4))
console.log(matrixReshape([[1,2,3,4], [5,6,7,8]], 4, 2))