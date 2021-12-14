class Solution {
private:
    vector<int> direction{-1, 0, 1, 0, -1};
    bool dfs(vector<vector<char>>& board, string word, int r, int c, vector<vector<bool>>& visited, int pos) {
        if(pos == word.size()-1) return true;
        visited[r][c] = true;
        for(int i = 0; i < 4; i++) {
            int x = r + direction[i];
            int y = c + direction[i+1];
            if(x >=0 && x < board.size() && y >=0 && y < board[0].size() && !visited[x][y] && word[pos+1] == board[x][y]) {
                if(dfs(board, word, x, y, visited, pos+1)) return true;
            }
        }
        visited[r][c] = false;
        return false;
    }
public:
    bool exist(vector<vector<char>>& board, string word) {
        if(board.empty() || word.empty()) return false;
        int m = board.size(), n = board[0].size();
        vector<vector<bool>> visited(m, vector<bool>(n, false));
        char start = word[0];
        for(int i = 0; i < m; ++i) {
            for(int j = 0; j < n; ++j) {
                if(start == board[i][j] && dfs(board, word, i, j, visited, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
};


class Solution {
private:
    void backtracking(int i, int j, vector<vector<char>>& board, string& word, bool& find, vector<vector<bool>>& visited, int pos) {
    if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size()) {
        return;
    }
    if (visited[i][j] || find || board[i][j] != word[pos]) {
       return;
    }
    if (pos == word.size() - 1) {
        find = true;
        return; 
    }
    visited[i][j] = true; // 修改当前节点状态
    // 递归子节点
    backtracking(i + 1, j, board, word, find, visited, pos + 1); 
    backtracking(i - 1, j, board, word, find, visited, pos + 1); 
    backtracking(i, j + 1, board, word, find, visited, pos + 1); 
    backtracking(i, j - 1, board, word, find, visited, pos + 1); 
    visited[i][j] = false; // 回改当前节点状态
}

public:
    bool exist(vector<vector<char>>& board, string word) {
        if (board.empty()) return false;
        int m = board.size(), n = board[0].size();
        vector<vector<bool>> visited(m, vector<bool>(n, false));
        bool find = false;
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                backtracking(i, j, board, word, find, visited, 0);
            } 
        }
        return find;
    }
};