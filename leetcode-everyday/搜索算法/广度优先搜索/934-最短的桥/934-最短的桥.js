/**
 * @param {number[][]} grid
 * @return {number}
 */

 const direction = [-1, 0, 1, 0, -1];

 var shortestBridge = function(grid) {
     let m = grid.length;
     let n = grid[0].length;
     let flipped = false;
     const points = [];
     for(let i = 0; i < m; ++i) {
         if(flipped) break;
         for(let j = 0; j < n; ++j) {
             if(grid[i][j] === 1) {
                 dfs(grid, points, i, j, m, n);
                 flipped = true;
                 break;
             }
         }
     }
     
     let level = 0;
     while(points.length) {
         ++ level;
         let n_size = points.length;
         while(n_size > 0) {
             const [r, c] = points.shift();            
             for(let i = 0; i < 4; ++i) {
                 let x = r + direction[i];
                 let y = c + direction[i+1];
                 if(x >= 0 && x < m && y >= 0 && y < n) {
                     if(grid[x][y] === 2) continue;
                     if(grid[x][y] === 1) return level;
                     points.push([x, y]);
                     grid[x][y] = 2;
                 }
             }
             n_size --;
         }
     }
     return 0;
 };
 
 function dfs(grid, points, i, j, m, n) {
     if(i < 0 || j < 0 || i === m || j === n || grid[i][j] === 2) return;
     if(grid[i][j] === 0) {
         points.push([i, j]);
         return;
     }
     grid[i][j] = 2;
     dfs(grid, points, i-1, j, m, n);
     dfs(grid, points, i+1, j, m, n);
     dfs(grid, points, i, j-1, m, n);
     dfs(grid, points, i, j+1, m, n);
 }