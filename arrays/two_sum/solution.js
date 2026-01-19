let nums = [2, 7, 11, 15];
let target = 9;

function twoSum(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (obj[target - n] !== undefined) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
}

console.log(twoSum(nums, target));
