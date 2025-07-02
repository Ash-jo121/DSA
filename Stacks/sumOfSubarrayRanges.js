/**
 * @param {number[]} arr
 * @return {number}
 */
var subArrayRanges = function (arr) {
  let n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let min = arr[i];
    let max = arr[i];
    for (let j = i; j < n; j++) {
      min = Math.min(min, arr[j]);
      max = Math.max(max, arr[j]);
      sum += max - min;
    }
  }

  return sum;
};
