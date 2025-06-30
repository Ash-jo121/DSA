class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxProduct(nums) {
    let n = nums.length;
    let maxP = new Array(n).fill(0);
    let minP = new Array(n).fill(0);
    let result = nums[0];

    maxP[0] = nums[0];
    minP[0] = nums[0];

    for (let i = 1; i < n; i++) {
      maxP[i] = Math.max(nums[i], nums[i] * maxP[i - 1], nums[i] * minP[i - 1]);
      minP[i] = Math.min(nums[i], nums[i] * minP[i - 1], nums[i] * maxP[i - 1]);
      result = Math.max(result, maxP[i]);
    }

    return result;
  }
}
