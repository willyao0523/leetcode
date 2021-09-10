// 给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。

//  

// 示例：
// 输入：S = "a1b2"
// 输出：["a1b2", "a1B2", "A1b2", "A1B2"]

// 输入：S = "3z4"
// 输出：["3z4", "3Z4"]

// 输入：S = "12345"
// 输出：["12345"]
//  

// 提示：

// S 的长度不超过12。
// S 仅由数字和字母组成。

/**
 * @param {string} s
 * @return {string[]}
 */
 var letterCasePermutation = function(s) {
  const res = [], n = s.length
  function dfs(i, path) {
      if(i === n) return res.push(path)
      if(isNaN(s[i])) {
          dfs(i+1, path + s[i].toLowerCase())
          dfs(i+1, path + s[i].toUpperCase())
      } else {
          dfs(i+1, path + s[i])
      }
  }
  dfs(0, '')
  return res
};