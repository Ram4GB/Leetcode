const dfs = (arr) => {
  const visited = new Set();
  const res = [];
  dfsAdj(arr, visited, res, 0);
  return res
};

const dfsAdj = (arr, visited, res, s) => {
  visited.add(s);
  res.push(s);
  for (let i = 0; i < arr[s].length; i++) {
    if (!visited.has(arr[s][i])) dfsAdj(arr, visited, res, arr[s][i]);
  }
};

console.log(
  dfs([
    [1, 2],
    [0, 2, 3],
    [0, 1, 4],
    [1, 4],
    [2, 3],
  ])
);
