// 给定一个由 0 和 1 组成的矩阵 mat ，请输出一个大小相同的矩阵，其中每一个格子是 mat 中对应位置元素到最近的 0 的距离。

// 两个相邻元素间的距离为 1 。

//  

// 示例 1：



// 输入：mat = [[0,0,0],[0,1,0],[0,0,0]]
// 输出：[[0,0,0],[0,1,0],[0,0,0]]
// 示例 2：



// 输入：mat = [[0,0,0],[0,1,0],[1,1,1]]
// 输出：[[0,0,0],[0,1,0],[1,2,1]]
//  

// 提示：

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 104
// 1 <= m * n <= 104
// mat[i][j] is either

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */


 const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
 var updateMatrix = function(mat) {
     const m = mat.length, n = mat[0].length
     const res = Array(m).fill().map(() => Array(n).fill(0))
     const visited = Array(m).fill().map(() => Array(n).fill(false))
     const q = []
     for(let i = 0; i < m; i++) {
         for(let j = 0; j < n; j++) {
             if(mat[i][j] === 0) {
                 res[i][j] = 0
                 q.push([i, j])
                 visited[i][j] = true
             }
         }
     }
 
     while(q.length) {
         const [i, j] = q.shift()                
         for(const [sx, sy] of dirs) {
             nx = i + sx
             ny = j + sy
             if(nx < m && nx >= 0 && ny < n && ny >=0 && !visited[nx][ny]) {
                 res[nx][ny] = res[i][j] + 1
                 visited[nx][ny] = true
                 q.push([nx, ny])
             }
         }
     }                
     return res
 };
 