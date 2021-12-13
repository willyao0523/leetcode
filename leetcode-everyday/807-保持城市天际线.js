/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxIncreaseKeepingSkyline = function(grid) {
  let m = grid.length;
  if(m === 0) return [];
  let n = grid[0].length;    
  const rows = [];
  const cols = [];
  for(let i = 0; i < m; i++) {
      rows[i] = Math.max(...grid[i]);
  }    
  for(let i = 0; i < n; i++) {
      let max = 0;
      for(let j = 0; j < m; j++) {
          max = Math.max(max, grid[j][i]);
      }
      cols[i] = max;
  }    
  let ans = 0;
  for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
          ans += (Math.min(rows[i], cols[j]) - grid[i][j]);            
      }
  }
  return ans;
};