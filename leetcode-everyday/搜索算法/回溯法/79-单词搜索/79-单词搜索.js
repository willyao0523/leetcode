/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

 const direction = [-1, 0, 1, 0, -1]

 var exist = function(board, word) {
     let m = board.length;
     if(m === 0) return false;
     let n = board[0].length;
     const visited = new Array(m).fill().map(() => new Array(n).fill(false));
     let start = word.charAt(0);
     for(let i = 0; i < m; i++) {
         for(let j = 0; j < n; j++) {
             if(start === board[i][j] && dfs(board, word, i, j, visited, 0)) {
                 return true;
             }
         }
     }
     return false;
 };
 
 function dfs(board, word, r, c, visited, pos) {
     if(visited[r][c]) return false;    
     if(pos === word.length-1) return true;    
     visited[r][c] = true;        
     for(let i = 0; i < 4; i++) {
         let x = r + direction[i];
         let y = c + direction[i+1];
         if(x >= 0 && x < board.length && y >=0 && y < board[0].length && word.charAt(pos+1) === board[x][y] && !visited[x][y]) {            
             if(dfs(board, word, x, y, visited, pos+1)) return true;
         }
     }
     visited[r][c] = false;
     return false;    
 }