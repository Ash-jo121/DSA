/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  if (nums[0] !== 0) {
    return 0;
  }
  console.log(nums);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] !== 1) {
      return nums[i - 1] + 1;
    }
  }
  return nums.length;
};
