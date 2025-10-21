/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  let tileMap = new Map();
  for (let i = 0; i < tiles.length; i++) {
    tileMap.set(tiles[i], (tileMap.get(tiles[i]) ?? 0) + 1);
  }

  const ans = new Set();

  const backtracking = (n, arr) => {
    if (arr.length === n) {
      return ans.add(arr.join(""));
    }
    for (const [k] of tileMap) {
      if (tileMap.get(k) > 0) {
        tileMap.set(k, tileMap.get(k) - 1);
        arr.push(k);
        backtracking(n, arr);
        arr.pop();
        tileMap.set(k, tileMap.get(k) + 1);
      }
    }
  };

  for (let i = 1; i <= tiles.length; i++) {
    backtracking(i, []);
  }

  return ans.size;
};

console.log(numTilePossibilities("AAB"));
console.log(numTilePossibilities("AAABBC"));
