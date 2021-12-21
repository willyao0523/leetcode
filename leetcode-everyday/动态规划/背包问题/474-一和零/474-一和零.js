/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var findMaxForm = function(strs, m, n) {
  const dp = new Array(m+1).fill().map(() => new Array(n+1).fill(0));
  for(const str of strs) {
      const [count0, count1] = count(str);
      for(let i = m; i >= count0; --i) {
          for(let j = n; j >= count1; --j) {
              dp[i][j] = Math.max(dp[i][j], 1 + dp[i-count0][j-count1]);
          }
      }
  }    
  return dp[m][n];
};

function count(str) {
  let count0 = str.length,
      count1 = 0;
  for(const ch of str) {
      if(ch === '1') {
          count1++;
          count0--;
      }
  }
  return [count0, count1];
}