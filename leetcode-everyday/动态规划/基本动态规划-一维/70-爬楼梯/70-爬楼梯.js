/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  let ans = 0;
  let prev = 0;
  let next = 1;
  for(let i = 1; i <= n ; ++i) {
      ans = prev + next;
      prev = next;
      next = ans;
  }
  return ans;
};