/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const currentColor = image[sr][sc];
  if (currentColor !== color) {
    image[sr][sc] = color;
    // top
    if (sr - 1 >= 0 && image[sr - 1][sc] === currentColor)
      image = floodFill(image, sr - 1, sc, color);
    // bottom
    if (sr + 1 < image.length && image[sr + 1][sc] === currentColor)
      image = floodFill(image, sr + 1, sc, color);
    // left
    if (sc - 1 >= 0 && image[sr][sc - 1] === currentColor)
      image = floodFill(image, sr, sc - 1, color);
    // right
    if (sc + 1 < image[sr].length && image[sr][sc + 1] === currentColor)
      image = floodFill(image, sr, sc + 1, color);
  }

  return image;
};

// console.log(
//   floodFill(
//     [
//       [1, 1, 1],
//       [1, 1, 0],
//       [1, 0, 1],
//     ],
//     1,
//     1,
//     2
//   )
// );

// console.log(
//   floodFill(
//     [
//       [0, 0, 0],
//       [0, 0, 0],
//     ],
//     0,
//     0,
//     0
//   )
// );

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    1,
    0,
    2
  )
);