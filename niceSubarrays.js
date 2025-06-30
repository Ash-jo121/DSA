/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let n = nums.length;
  let leftPrefixArray = new Array(n).fill(0);
  let rightPrefixArray = new Array(n).fill(0);

  leftPrefixArray[0] = nums[0] % 2 === 1 ? 0 : 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] % 2 === 1) {
      leftPrefixArray[i] = nums[i - 1] % 2 === 1 ? 0 : leftPrefixArray[i - 1];
    } else {
      leftPrefixArray[i] =
        nums[i - 1] % 2 === 1 ? 1 : leftPrefixArray[i - 1] + 1;
    }
  }

  rightPrefixArray[n - 1] = nums[n - 1] % 2 === 1 ? 0 : 1;

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] % 2 === 1) {
      rightPrefixArray[i] = nums[i + 1] % 2 === 1 ? 0 : rightPrefixArray[i + 1];
    } else {
      rightPrefixArray[i] =
        nums[i + 1] % 2 === 1 ? 1 : rightPrefixArray[i + 1] + 1;
    }
  }

  let i = 0;
  let j = 0;
  let tempK = 0;
  let result = 0;
  console.log(leftPrefixArray, rightPrefixArray);
  while (j < n) {
    if (nums[j] % 2 === 1) {
      tempK++;
      if (tempK === k) {
        while (nums[i] % 2 === 0) {
          i++;
        }
        result =
          1 +
          leftPrefixArray[i] +
          rightPrefixArray[j] +
          leftPrefixArray[i] * rightPrefixArray[j] +
          result;
        tempK--;
        i++;
      }
      j++;
    } else {
      j++;
    }
  }
  return result;
};

console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
