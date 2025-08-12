/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    const rows = grid[i];
    for (let j = 0; j < rows.length; j++) {
      const cell = rows[j];
      if (cell === 0) continue;
      const top    = i - 1 >= 0 ? grid[i - 1][j] : 0;
      const bottom = i + 1 < grid.length ? grid[i + 1][j] : 0;
      const left   = j - 1 >= 0 ? grid[i][j - 1] : 0;
      const right  = j + 1 < rows.length ? grid[i][j + 1] : 0;
      if (!top) {
        count++;
      }
      if (!bottom) {
        count++;
      }
      if (!left) {
        count++;
      }
      if (!right) {
        count++;
      }
    }
  }

  return count;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);

console.log(islandPerimeter([[1]]));

console.log(islandPerimeter([[1, 0]]));
