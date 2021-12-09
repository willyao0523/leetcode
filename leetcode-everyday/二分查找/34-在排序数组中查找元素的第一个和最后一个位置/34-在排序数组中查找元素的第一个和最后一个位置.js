/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  let lower = lower_bound(nums, target);
  let upper = upper_bound(nums, target);
  if(lower > upper) return [-1, -1];
  return [lower, upper];
};

function lower_bound(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
      let mid = left + Math.floor((right - left)/2);
      if(nums[mid] >= target) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return left;
}

function upper_bound(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
      let mid = left + Math.floor((right - left)/2);
      if(nums[mid] <= target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return right;
}