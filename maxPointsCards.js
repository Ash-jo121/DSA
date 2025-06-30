/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let totalSum = 0;
  let n = cardPoints.length;
  for (let i = 0; i < cardPoints.length; i++) {
    totalSum += cardPoints[i];
  }
  if (k === n) {
    return totalSum;
  }

  let i = 0;
  let j = n - k - 1;
  let tempSum = 0;

  for (let k = i; k <= j; k++) {
    tempSum += cardPoints[k];
  }
  let minSum = tempSum;
  while (j < n - 1) {
    j++;
    i++;
    tempSum = tempSum + cardPoints[j] - cardPoints[i - 1];
    minSum = Math.min(tempSum, minSum);
  }

  return totalSum - minSum;
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
