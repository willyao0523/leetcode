// 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
//  

// 示例 1：


// 输入：board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// 输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// 解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
// 示例 2：

// 输入：board = [["X"]]
// 输出：[["X"]]
//  

// 提示：

// m == board.length
// n == board[i].length
// 1 <= m, n <= 200
// board[i][j] 为 'X' 或 'O'

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function(board) {
  const m = board.length, n = board[0].length
  const visited = Array(m).fill().map(() => Array(n).fill(false))
  for(let i = 0; i < n; i++) {
      if(board[0][i] === 'O' && !visited[0][i]) {
          dfs(board, 0, i, m, n, visited)
      }
  }
  for(let i = 0; i < n; i++) {
      if(board[m-1][i] === 'O' && !visited[m-1][i]) {
          dfs(board, m-1, i, m, n, visited)
      }
  }
  for(let i = 0; i < m; i++) {
      if(board[i][0] === 'O' && !visited[i][0]) {
          dfs(board, i, 0, m, n, visited)
      }
  }
  for(let i = 0; i < m; i++) {
      if(board[i][n-1] === 'O' && !visited[i][n-1]) {
          dfs(board, i, n-1, m, n, visited)
      }
  }
  for(let i = 1; i < m-1; i++) {
      for(let j = 1; j < n-1; j++) {
          if(board[i][j] === 'O' && !visited[i][j]) {
              board[i][j] = 'X'
          }
      }
  }
};

const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

function dfs(board, i, j, m, n, visited) {
  if(i < 0 || i >= m) return
  if(j < 0 || j >= n) return
  if(board[i][j] === 'X') return
  if(visited[i][j]) return
  visited[i][j] = true
  for(let [dx, dy] of dirs) {
      const nx = dx + i
      const ny = dy + j
      dfs(board, nx, ny, m, n, visited)
  }
}