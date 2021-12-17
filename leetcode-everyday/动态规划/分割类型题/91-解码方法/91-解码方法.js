/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
  let n = s.length;
  if(n === 0) return 0;
  let prev = s.charAt(0) - '0';
  if(prev === 0) return 0;
  if(n === 1) return 1;
  // 227 - 2 
  // 220 - 2
  // 223 - 3        
  const dp = new Array(n+1).fill(1);
  for(let i = 2; i <= n; ++i) {
      let cur = s.charAt(i-1) - '0';
      if((prev === 0 || prev > 2) && cur === 0) {
          return 0;
      }
      if (prev === 1 || prev == 2 && cur < 7) {
         if (cur) {
            dp[i] = dp[i-2] + dp[i-1];
         } else {
            dp[i] = dp[i-2];
         }
     } else {
         dp[i] = dp[i-1];
     }
     prev = cur;
  }
  return dp[n];
};