/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let arr = [];
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        arr.push(j);
        break;
      }
    }
  }

  console.log("hello");
  console.log(arr);

  for (let k of arr) {
    let temp = k;
    let item = nums2[temp];
    while (temp < nums2.length) {
      if (nums2[temp] > item) {
        result.push(nums2[temp]);
        break;
      }
      temp++;
    }
    if (temp === nums2.length) {
      result.push(-1);
    }
  }
  return result;
};

console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
