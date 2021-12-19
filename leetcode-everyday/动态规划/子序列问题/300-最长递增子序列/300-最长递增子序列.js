/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  let n = nums.length;
  if(n <= 1) return n;
  const dp = [];
  dp.push(nums[0]);    
  for(let i = 1; i < n; ++i) {
      if(dp[dp.length-1] < nums[i]) {
          dp.push(nums[i]);
      } else {
          let index = lower_bound(dp, nums[i]);
          dp[index] = nums[i];
      }
  }    
  return dp.length;
};

function lower_bound(dp, target) {
  let left = 0,
      right = dp.length-1;
  while(left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if(dp[mid] < target) {
          left = mid + 1; 
      } else {
          right = mid - 1;
      }
  }
  return left;
}