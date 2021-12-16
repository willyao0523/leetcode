/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  // const memo = new Array(nums.length+1).fill(0);;
  let ans = nums[0];
  // memo[1] = nums[0];
  let memo_next = nums[0];
  let memo_prev = 0;
  for(let i = 1; i < nums.length; i++) {
      // ans = Math.max(nums[i]+memo[i-1], memo[i]);
      ans = Math.max(nums[i] + memo_prev, memo_next);
      // memo[i+1] = Math.max(ans, memo[i+1]);
      memo_prev = memo_next;
      memo_next = ans;        
  }
  return ans;
};