/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max1 = 0;
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      max1 = nums[i];
      index = i;
    }
  }
  //   return index;
  nums.splice(index, 1);

  //   return nums;
  let max2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max2) {
      max2 = nums[i];
    }
  }
  //   return max1;
  return (max2 - 1) * (max1 - 1);
};

console.log(maxProduct([2, 3, 4, 5]));
