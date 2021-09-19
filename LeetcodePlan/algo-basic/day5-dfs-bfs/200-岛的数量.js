// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

//  

// 示例 1：

// 输入：grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1
// 示例 2：

// 输入：grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// 输出：3
//  

// 提示：

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] 的值为 '0' 或 '1'

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  let m = grid.length, n = grid[0].length    
  let res = 0
  for(let i = 0; i < m; i ++) {
      for(let j = 0; j < n; j++) {            
          if(grid[i][j] === "1") {                
              dfs(grid, i, j, m, n)
              res ++                    
          }
      }
  }
  return res    
};

const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

function dfs(grid, i, j, m, n) {
  if(i < 0 || i >= m) return
  if(j < 0 || j >= n) return    
  if(grid[i][j] === '0') return 
  grid[i][j] = '0'   
  for(let p = 0; p < dirs.length; p++) {
      const nx = dirs[p][0] + i
      const ny = dirs[p][1] + j
      dfs(grid, nx, ny, m, n)
  }
}