/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 const direction = [-1, 0, 1, 0, -1];

 var pacificAtlantic = function(heights) {
     if(!heights.length || !heights[0].length) return [];
     const ans = [];
     let m = heights.length;
     let n = heights[0].length;
     const can_reach_p = new Array(m).fill().map(() => new Array(n).fill(false));
     const can_reach_a = new Array(m).fill().map(() => new Array(n).fill(false));
     for(let i = 0; i < m; i++) {
         dfs(heights, can_reach_p, i, 0);
         dfs(heights, can_reach_a, i, n-1);
     }
     for(let i = 0; i < n; i++) {
         dfs(heights, can_reach_p, 0, i);
         dfs(heights, can_reach_a, m-1, i);
     }
     
     for(let i = 0; i < m; i++) {
         for(let j = 0; j < n; j++) {
             if(can_reach_a[i][j] && can_reach_p[i][j]) {
                 ans.push([i, j]);
             }
         }
     }
     return ans;
 };
 
 function dfs(height, can_reach, r, c) {
     if(can_reach[r][c]) return;
     can_reach[r][c] = true;
     for(let i = 0; i < 4; i++) {
         let x = r + direction[i];
         let y = c + direction[i+1];
         if(x >= 0 && x < height.length && y >= 0 && y < height[0].length && height[x][y] >= height[r][c]) {
             dfs(height, can_reach, x, y);
         }
     }
 }