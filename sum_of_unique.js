/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let numbers = {};
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (numbers[nums[i]]) {
      numbers[nums[i]] += 1;
    } else {
      numbers[nums[i]] = 1;
    }
  }
  for (var key in numbers) {
    if (numbers[key] === 1) {
      sum += parseInt(key);
    }
  }

  return sum;
};

console.log(sumOfUnique([1, 2, 3, 2]));
