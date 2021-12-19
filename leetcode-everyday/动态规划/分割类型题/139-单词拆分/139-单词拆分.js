/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
  let n = s.length;
  const dp = new Array(n+1).fill(false);
  dp[0] = true;
  for(let i = 1; i <= n; ++i) {
      for(const word of wordDict) {
          const len = word.length;            
          if(i >= len && s.slice(i-len, i) === word) {
              dp[i] = dp[i] || dp[i-len];
          }
      }
  } 
  console.log(dp);
  return dp[n];
};