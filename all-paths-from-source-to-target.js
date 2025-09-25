/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const res = [];
  backtracking(graph, 0, [0], res);
  return res;
};

const backtracking = (graph, s, arr, res) => {
  if (s === graph.length - 1) {
    res.push(Array.from(arr));
  }

  // all possible cases
  for (let i = 0 ; i < graph[s].length; i++) {
    // is valid choice?
    arr.push(graph[s][i]);
    backtracking(graph, graph[s][i], arr, res);
    arr.pop();
  }
}

console.log(allPathsSourceTarget([[1,2],[3],[3],[]]));
console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]))