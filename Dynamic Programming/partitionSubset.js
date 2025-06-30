class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  canPartition(nums) {
    let storage = new Set();
    let n = nums.length;
    let target = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
      sum += nums[i];
    }

    if (sum % 2 === 1) {
      return false;
    }

    target = sum / 2;
    if (nums[n - 1] === target) {
      return true;
    }
    storage.add(nums[n - 1]);
    storage.add(0);

    for (let i = n - 2; i >= 0; i--) {
      let tempArr = [];
      for (let val of storage) {
        let temp = val + nums[i];
        if (temp === target) {
          return true;
        }
        tempArr.push(temp);
      }
      storage.add(...tempArr);
    }

    return false;
  }
}

const solution = new Solution();
console.log("Final Solution: ", solution.canPartition([1, 5, 11, 5]));
