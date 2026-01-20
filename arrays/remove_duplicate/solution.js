function removeDuplicates(nums) {
  let x = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[x]) {
      nums[x] = nums[i];
      x++
    }
  }
  return { nums, x };
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
