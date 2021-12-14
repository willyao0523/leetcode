class Solution {
private:
    void dfs(vector<string>& board, vector<bool>& column, vector<bool>& ldiag, vector<bool>& rdiag, int row, int n, vector<vector<string>>& ans) {
        if(row == n) {
            ans.push_back(board);
            return;
        }
        for(int i = 0; i < n; ++i) {
            if(column[i] || ldiag[n-row+i-1] || rdiag[i+row]) continue;
            board[row][i] = 'Q';
            column[i] = ldiag[n-row+i-1] = rdiag[i+row] = true;
            dfs(board, column, ldiag, rdiag, row+1, n, ans);
            board[row][i] = '.';
            column[i] = ldiag[n-row+i-1] = rdiag[i+row] = false;
        }
    }
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> ans;
        if(n == 0) return ans;
        vector<string> board(n, string(n, '.'));
        vector<bool> column(n, false); vector<bool> ldiag(2*n-1, false); vector<bool> rdiag(2*n-1, false);
        dfs(board, column, ldiag, rdiag, 0, n, ans);
        return ans;
    }
};