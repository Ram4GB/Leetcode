/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  let res = 0;
  const backtracking = (points, s, arr) => {
    if (arr.length === 3) {
      const [p1, p2, p3] = arr;
      const area =
        0.5 * Math.abs(p1[0] * p2[1] - p2[0] * p1[1] + p2[0] * p3[1] - p3[0] * p2[1] + p3[0] * p1[1] - p1[0] * p3[1]);
      if (area > res) {
        res = area;
      }
      return;
    }
    for (let i = s; i < points.length; i++) {
      arr.push(points[i]);
      backtracking(points, i + 1, arr);
      arr.pop();
    }
  };
  backtracking(points, 0, []);
  return res;
};

const isValidPoint = (point3, arr) => {
  if (arr.length === 2) {
    const [point1, point2] = arr;
    if (
      (point1[0] === point2[0] && point2[0] === point3[0]) ||
      (point1[1] === point2[1] && point2[1] === point3[1]) ||
      (point1[0] === point1[1] && point2[0] === point2[1] && point3[0] === point3[1])
    ) {
      return false;
    }
  }
  return true;
};

console.log(
  largestTriangleArea([
    [0, 0],
    [0, 1],
    [1, 0],
    [0, 2],
    [2, 0],
  ])
);

console.log(
  largestTriangleArea([
    [1, 0],
    [0, 0],
    [0, 1],
  ])
);

console.log(largestTriangleArea([0, 0], [1, 1], [2, 2]));
