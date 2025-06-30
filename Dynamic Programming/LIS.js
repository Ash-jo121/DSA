class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  lengthOfLIS(nums) {
    let n = nums.length;
    let dp = new Array(n).fill(0);
    dp[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
      let maxL = 0;
      for (let j = i + 1; j < n; j++) {
        if (nums[j] > nums[i]) {
          maxL = Math.max(maxL, dp[j]);
        }
      }
      dp[i] = maxL + 1;
    }

    console.log(dp);
    let result = 0;
    for (let i = 0; i < n; i++) {
      result = Math.max(dp[i], result);
    }

    return result;
  }
}

const solution = new Solution();
console.log(solution.lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
