class Solution {
  /**
   * @param {number[]} cost
   * @return {number}
   */
  minCostClimbingStairs(cost) {
    let n = cost.length;
    let dp = new Array(n + 1).fill(0);
    dp[n] = 0;
    for (let i = n - 1; i >= 0; i--) {
      dp[i] =
        cost[i] +
        Math.min(i + 1 > n ? 0 : dp[i + 1], i + 2 > n ? 0 : dp[i + 2]);
    }
    return Math.min(dp[0], dp[1]);
  }
}
