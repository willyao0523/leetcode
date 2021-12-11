/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
  let left = 0;
  let right = nums.length-1;
  let target = nums.length - k;
  while(left < right) {
      let mid = helper(nums, left, right);
      if(mid === target) return nums[mid];
      else if(mid > target) right = mid - 1;
      else left = mid + 1;
  }
  return nums[left];
};

function helper(nums, left, right) {
  let pivot = nums[right];
  let l = left;
  for(let i = left; i <= right; i++) {
      if(nums[i] < pivot) {
          [nums[i], nums[l]] = [nums[l], nums[i]];
          l ++;
      }
  }
  [nums[right], nums[l]] = [nums[l], nums[right]];
  return l;
}