// 给定一个包含了一些 0 和 1 的非空二维数组 grid 。

// 一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

// 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)

//  

// 示例 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// 对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。

// 示例 2:

// [[0,0,0,0,0,0,0,0]]
// 对于上面这个给定的矩阵, 返回 0。

/**
 * @param {number[][]} grid
 * @return {number}
 */

 let res = 0

 var maxAreaOfIsland = function(grid) {
     let r = grid.length, c = grid[0].length
     const visited = Array(r).fill().map(() => Array(c).fill(false))
     let ans = 0
 
     for(let i = 0; i < r; i++) {
         for(let j = 0; j < c; j++) {                        
             if(grid[i][j] === 1) {
                 let res = helper(grid, i, j, r, c, visited)
                 ans = Math.max(res, ans)
             }
                 
         }
     }
 
     return ans;
 };
 
 function helper(grid, i, j, r, c, visited) {
     if(i < 0 || i >= r) return 0
     if(j < 0 || j >= c) return 0
     if(visited[i][j]) return 0
     if(grid[i][j] !== 1) return 0
     visited[i][j] = true
     let res = 1;
 
     res += helper(grid, i+1, j, r, c, visited)
     res += helper(grid, i-1, j, r, c, visited)
     res += helper(grid, i, j+1, r, c, visited)
     res += helper(grid, i, j-1, r, c, visited)
 
     return res
 }