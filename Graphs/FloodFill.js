/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function helperFunction(image, sColor, color, i, j, visited) {
  if (image[i][j] !== sColor) {
    return;
  }
  if (visited[i][j] === 1) {
    return;
  }

  image[i][j] = color;
  visited[i][j] = 1;
  if (i + 1 < image.length) {
    helperFunction(image, sColor, color, i + 1, j, visited);
  }
  if (i - 1 >= 0) {
    helperFunction(image, sColor, color, i - 1, j, visited);
  }
  if (j - 1 >= 0) {
    helperFunction(image, sColor, color, i, j - 1, visited);
  }
  if (j + 1 < image[0].length) {
    helperFunction(image, sColor, color, i, j + 1, visited);
  }
}

var floodFill = function (image, sr, sc, color) {
  let visited = Array.from({ length: image.length }, () =>
    new Array(image[0].length).fill(0)
  );
  helperFunction(image, image[sr][sc], color, sr, sc, visited);
  return image;
};

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    0
  )
);
