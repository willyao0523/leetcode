// 给你一个字符串 s，找到 s 中最长的回文子串。

//  

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"
// 示例 3：

// 输入：s = "a"
// 输出："a"
// 示例 4：

// 输入：s = "ac"
// 输出："a"
//  

// 提示：

// 1 <= s.length <= 1000
// s 仅由数字和英文字母（大写和/或小写）组成

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  if(!s || s.length === 0) return '';
  const n = s.length;
  let begin = 0, end = 0;
  const dp = Array(n).fill().map(() => Array(n).fill(false));
  for(let len = 0; len < n; len++) {
      for(let i = 0; i+len < n; i++) {
          const j = i + len
          if(len === 0) dp[i][j] = true;
          else if(len === 1) dp[i][j] = s.charAt(i) === s.charAt(j)
          else dp[i][j] = dp[i+1][j-1] && s.charAt(i) === s.charAt(j)
          if(dp[i][j] && len > end-begin) {
              begin = i;
              end = j;
          }
      }
  }
  return s.substring(begin, end+1);
};