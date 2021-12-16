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


/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function(mat) {
  if(!mat.length) return [];
  let m = mat.length;
  let n = mat[0].length;
  const dp = new Array(m).fill().map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER-1));
  for(let i = 0; i < m; ++i) {
      for(let j = 0; j < n; ++j) {
          if(mat[i][j] === 0) {
              dp[i][j] = 0;
          } else {
              if(j > 0) {
                  dp[i][j] = Math.min(dp[i][j], dp[i][j-1]+1);
              }
              if(i > 0) {
                  dp[i][j] = Math.min(dp[i][j], dp[i-1][j] + 1);
              }
          }
      }
  }
  for(let i = m-1; i >= 0; --i) {
      for(let j = n-1; j >= 0; --j) {
          if(mat[i][j] !== 0) {
              if(j < n-1) {
                  dp[i][j] = Math.min(dp[i][j], dp[i][j+1]+1);
              }
              if(i < m-1) {
                  dp[i][j] = Math.min(dp[i][j], dp[i+1][j]+1);
              }
          }
      }
  }
  return dp;
};