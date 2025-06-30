/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;
  let n = prices.length;

  for (let i = 1; i < n; i++) {
    if (prices[i] > prices[i - 1]) {
      result += prices[i] - prices[i - 1];
    }
  }

  return result;
};
