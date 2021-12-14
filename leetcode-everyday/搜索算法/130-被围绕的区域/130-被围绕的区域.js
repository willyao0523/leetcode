/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 const direction = [-1, 0, 1, 0, -1];

 var solve = function(board) {
     let m = board.length;
     let n = board[0].length;
     const memo = new Array(m).fill().map(() => new Array(n).fill(0));
     for(let i = 0; i < m; ++i) {
         if(board[i][0] === 'O' && memo[i][0] === 0) {
             dfs(board, memo, i, 0, m, n, false);
         }
     }
     for(let i = 0; i < m; ++i) {
         if(board[i][n-1] === 'O' && memo[i][n-1] === 0) {
             dfs(board, memo, i, n-1, m, n, false);
         }
     }
     for(let i = 0; i < n; ++i) {
         if(board[0][i] === 'O' && memo[0][i] === 0) {
             dfs(board, memo, 0, i, m, n, false);
         }
     }
     for(let i = 0; i < n; ++i) {
         if(board[m-1][i] === 'O' && memo[m-1][i] === 0) {
             dfs(board, memo, m-1, i, m, n, false);
         }
     }
 
     for(let i = 1; i < m; ++i) {
         for(let j = 1; j < n; ++j) {
             if(board[i][j] === 'O' && memo[i][j] === 0) {
                 dfs(board, memo, i, j, m, n, true);
             }
         }
     }
 };
 
 function dfs(board, memo, i, j, m, n, flip) {
     if(i < 0 || i === m || j < 0 || j === n || memo[i][j] === 1 || board[i][j] === 'X') {
         return;
     }
     if(flip) board[i][j] = 'X';
     memo[i][j] = 1;    
     for(let k = 0; k < 4; ++k) {
         let x = i + direction[k];
         let y = j + direction[k+1];
         dfs(board, memo, x, y, m, n, flip);
     }
 }