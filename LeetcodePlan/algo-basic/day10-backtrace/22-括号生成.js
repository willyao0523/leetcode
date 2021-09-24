// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 有效括号组合需满足：左括号必须以正确的顺序闭合。

//  

// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]
//  

// 提示：

// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  const res = []
  if(n <= 0) return res
  helper(n, n, "", res)
  return res
};

function helper(left, right, path, res) {
  if(left === 0 && right === 0) {
      res.push(path)
      return
  }
  if(left > 0) {        
      helper(left-1, right, path+'(', res)        
  } 
  if(right > left) {        
      helper(left, right-1, path+')', res)        
  }
}