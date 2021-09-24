// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

//  

// 示例 1：


// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true
// 示例 2：


// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// 输出：true
// 示例 3：


// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// 输出：false
//  

// 提示：

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board 和 word 仅由大小写英文字母组成
//  

// 进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  const m = board.length, n = board[0].length 
  const visited = Array(m).fill().map(() => Array(n).fill(false))
  for(let i = 0; i < m; i++) {
      for(let j = 0;  j < n; j++) {            
          if(helper(board, word, i, m, j, n, 0, visited)) {
              return true
          }            
      }
  }
  return false
};

function helper(board, word, i, m, j, n, index, visited) {
  if(index >= word.length) return true
  
  if(i < 0 || i >= m) return false
  if(j < 0 || j >= n) return false
  if(visited[i][j]) return false
  if(board[i][j] !== word.charAt(index)) {
      return false
  }
  
  visited[i][j] = true    
  const res = helper(board, word, i+1, m, j, n, index+1, visited)
  || helper(board, word, i-1, m, j, n, index+1, visited)
  || helper(board, word, i, m, j+1, n, index+1, visited)
  || helper(board, word, i, m, j-1, n, index+1, visited)
  visited[i][j] = false    
  return res
}
