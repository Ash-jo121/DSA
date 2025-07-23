/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let n = nums.length;
  let temp = [];
  if (k > n) {
    k = k % n;
  }
  let startX = n - k;

  for (let i = startX; i < n; i++) {
    temp.push(nums[i]);
  }

  console.log(temp);

  for (let i = startX - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }
};
rotate([-1, -100, 3, 99], 2);
