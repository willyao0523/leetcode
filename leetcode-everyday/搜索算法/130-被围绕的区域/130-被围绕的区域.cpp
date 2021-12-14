class Solution {
private:
    vector<int> direction{-1, 0, 1, 0, -1};
    void dfs(vector<vector<char>>& board, vector<vector<bool>>& memo, int r, int c, int m, int n, bool flip) {
        if(r < 0 || r == m) return;
        if(c < 0 || c == n) return;
        if(memo[r][c]) return;
        if(board[r][c] == 'X') return;
        if(flip) board[r][c] = 'X';
        memo[r][c] = true;
        for(int i = 0; i < 4; ++i) {
            int x = r + direction[i], y = c + direction[i+1];
            dfs(board, memo, x, y, m, n, flip);
        }
    }
public:
    void solve(vector<vector<char>>& board) {
        int m = board.size(), n = board[0].size();
        vector<vector<bool>> memo(m, vector<bool>(n, false));
        for(int i = 0; i < m; ++i) {
            if(board[i][0] == 'O' && !memo[i][0]) {
                dfs(board, memo, i, 0, m, n, false);
            }
        }
        for(int i = 0; i < m; ++i) {
            if(board[i][n-1] == 'O' && !memo[i][n-1]) {
                dfs(board, memo, i, n-1, m, n, false);
            }
        }
        for(int i = 0; i < n; ++i) {
            if(board[0][i] == 'O' && !memo[0][i]) {
                dfs(board, memo, 0, i, m, n, false);
            }
        }
        for(int i = 0; i < n; ++i) {
            if(board[m-1][i] == 'O' && !memo[m-1][i]) {
                dfs(board, memo, m-1, i, m, n, false);
            }
        }
        for(int i = 1; i < m; ++i) {
            for(int j = 1; j < n; ++j) {
                if(board[i][j] == 'O' && !memo[i][j]) {
                    dfs(board, memo, i, j, m, n, true);
                }
            }
        }
    }
};