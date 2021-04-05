var maxSubArray = function (nums) {
  // find all subarrays
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let currentSubArr = 0;
    for (let j = i; j < nums.length; j++) {
      currentSubArr += nums[j];
      max = Math.max(max, currentSubArr);
    }
  }
  return max;
};

var SubArrays = function (nums) {
  // find all subarrays
  let subArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      subArr.push;
    }
  }
  return max;
};
