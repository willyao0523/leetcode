/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
  let sum = nums.reduce((a, b) => a + b);
  if(sum % 2 === 1) return false;
  let target = Math.floor(sum / 2);
  const dp = new Array(target+1).fill(false);
  dp[0] = true;
  for(let i = 1; i <= nums.length; i++) {
      for(let j = target; j >= nums[i-1]; --j) {
          dp[j] = dp[j] || dp[j - nums[i-1]];
      }
  }
  // console.log(dp);
  return dp[target];
};