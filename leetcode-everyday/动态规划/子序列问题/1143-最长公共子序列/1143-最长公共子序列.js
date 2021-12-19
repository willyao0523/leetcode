/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
  let m = text1.length,
      n = text2.length;
  const dp = new Array(m+1).fill().map(() => new Array(n+1).fill(0));
  for(let i = 1; i <= m; ++i) {
      for(let j = 1; j <= n; ++j) {
          if(text1.charAt(i-1) === text2.charAt(j-1)) {
              dp[i][j] = dp[i-1][j-1] + 1;
          } else {
              dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
          }
      }
  }
  return dp[m][n];
};

//   a b c d e
// a 1 1 0 0 0
// c 1 1
// e 0 