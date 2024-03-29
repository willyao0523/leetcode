// 给你一个 n x n 的二进制矩阵 grid 中，返回矩阵中最短 畅通路径 的长度。如果不存在这样的路径，返回 -1 。

// 二进制矩阵中的 畅通路径 是一条从 左上角 单元格（即，(0, 0)）到 右下角 单元格（即，(n - 1, n - 1)）的路径，该路径同时满足下述要求：

// 路径途经的所有单元格都的值都是 0 。
// 路径中所有相邻的单元格应当在 8 个方向之一 上连通（即，相邻两单元之间彼此不同且共享一条边或者一个角）。
// 畅通路径的长度 是该路径途经的单元格总数。

//  

// 示例 1：


// 输入：grid = [[0,1],[1,0]]
// 输出：2
// 示例 2：


// 输入：grid = [[0,0,0],[1,1,0],[1,1,0]]
// 输出：4
// 示例 3：

// 输入：grid = [[1,0,0],[1,1,0],[1,1,0]]
// 输出：-1
//  

// 提示：

// n == grid.length
// n == grid[i].length
// 1 <= n <= 100
// grid[i][j] 为 0 或 1

/**
 * @param {number[][]} grid
 * @return {number}
 */

 const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1], [1, 1], [-1, -1], [-1, 1], [1, -1]]

 var shortestPathBinaryMatrix = function(grid) {
     let m = grid.length, n = grid[0].length
     if(m === 0 || grid[0][0] !== 0 || grid[m-1][n-1]) {
         return -1
     }
     const q = []
     q.push([0, 0])
     grid[0][0] = 1
     let path = 1
     while(q.length) {
         const size = q.length
         for(let i = 0; i < size; i++) {
             const [x, y] = q.shift()
             if(x === m-1 && y === n-1) {
                 return path
             }
             for(let [dirX, dirY] of dirs) {
                 const nx = x + dirX, ny = y + dirY
                 if(nx < 0 || ny < 0 || nx >= m || ny >= n || grid[nx][ny] === 1) {
                     continue;
                 }
                 q.push([nx, ny])
                 grid[nx][ny] = 1
             }
         }        
         path ++
     }  
     return -1
 };
 
 
 
 