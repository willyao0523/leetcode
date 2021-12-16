class Solution {
public:
    vector<vector<int>> updateMatrix(vector<vector<int>>& mat) {
        if(mat.empty()) return {};
        int m = mat.size(), n = mat[0].size();
        vector<vector<int>> dp(m, vector<int>(n, INT_MAX-1));
        for(int i = 0; i < m; ++i) {
            for(int j = 0; j < n; ++j) {
                if(mat[i][j] == 0) {
                    dp[i][j] = 0;
                } else {
                    if(j > 0) {
                        dp[i][j] = min(dp[i][j-1]+1, dp[i][j]);
                    }
                    if(i > 0) {
                        dp[i][j] = min(dp[i-1][j]+1, dp[i][j]);
                    }
                }
            }
        }
        for(int i = m-1; i >= 0; --i) {
            for(int j = n-1; j >= 0; --j) {
                if(mat[i][j] != 0) {
                    if(j < n-1) {
                        dp[i][j] = min(dp[i][j+1]+1, dp[i][j]);
                    }
                    if(i < m-1) {
                        dp[i][j] = min(dp[i+1][j]+1, dp[i][j]);
                    }
                }
            }
        }
        return dp;
    }
};