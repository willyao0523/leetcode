/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
  let m = grid.length;
  if(m === 0) return 0;
  let n = grid[0].length;
  let ans = 0;    
  for(let i = 0; i < m; ++i) {
      for(let j = 0; j < n; j++) {
          if(grid[i][j] === 1) {
              ans = Math.max(ans, dfs(grid, i, j, m, n));
          }
      }
  }
  return ans;
};

function dfs(grid, i, j, m, n) {
  if(i < 0 || i >= m) return 0;
  if(j < 0 || j >= n) return 0;    
  if(grid[i][j] === 0) return 0;
  grid[i][j] = 0;
  let res = 1;
  res += dfs(grid, i+1, j, m, n);
  res += dfs(grid, i-1, j, m, n);
  res += dfs(grid, i, j+1, m, n);
  res += dfs(grid, i, j-1, m, n);
  return res;
}