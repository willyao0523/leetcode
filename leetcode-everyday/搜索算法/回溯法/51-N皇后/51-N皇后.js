/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
  const ans = [];
  if(n === 0) return ans;
  const board = new Array(n).fill('.'.repeat(n));
  const column = new Array(n).fill(false);
  const ldiag = new Array(2*n-1).fill(false);
  const rdiag = new Array(2*n-1).fill(false);
  dfs(board, column, ldiag, rdiag, 0, n, ans);
  return ans;
};

function dfs(board, column, ldiag, rdiag, row, n, ans) {
  if(row === n) {
      ans.push([...board]);
      return;
  }
  for(let i = 0; i < n; i++) {
      /**
       * column: 同一列
       * ldiag: row - col + N - 1
       * rdiag: row + col
       */
      if(column[i] || ldiag[n-row+i-1] || rdiag[row+i]) continue;        
      board[row] = board[row].substring(0, i) + 'Q' + board[row].substring(i+1);
      column[i] = true;
      ldiag[n-row+i-1] = true;
      rdiag[row+i] = true;
      dfs(board, column, ldiag, rdiag, row+1, n, ans);
      board[row] = board[row].substring(0, i) + '.' + board[row].substring(i+1);
      column[i] = false;
      ldiag[n-row+i-1] = false;
      rdiag[row+i] = false;
  }
}