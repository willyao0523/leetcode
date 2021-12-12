class Solution {
public:
    vector<int> direction{-1,0,1,0,-1};
    int maxAreaOfIsland(vector<vector<int>>& grid) {
        int m = grid.size(), n = m ? grid[0].size() : 0, local_area, x, y, ans = 0;
        for(int i = 0; i < m; ++i) {
            for(int j = 0; j < n; ++j) {
                if(grid[i][j]) {
                    local_area = 1;
                    grid[i][j] = 0;
                    stack<pair<int, int>> island;
                    island.push({i, j});
                    while(!island.empty()) {
                        auto [r, c] = island.top();
                        island.pop();
                        for(int k = 0; k < 4; ++k) {
                            x = r + direction[k], y = c + direction[k+1];
                            if(x >= 0 && x < m && y >= 0 && y < n && grid[x][y] == 1) {
                                grid[x][y] = 0;
                                island.push({x, y});
                                ++ local_area;
                            }
                        }
                    } 
                    ans = max(local_area, ans);
                }                
                
            }
        }
        return ans;
    }
};

class Solution {
private:
    int dfs(vector<vector<int>>& grid, int i, int j, int m, int n) {
        if(i < 0 || i >= m) return 0;
        if(j < 0 || j >= n) return 0;
        if(grid[i][j] == 0) return 0;
        grid[i][j] = 0;
        int res = 1;
        res += dfs(grid, i+1, j, m, n);
        res += dfs(grid, i-1, j, m, n);
        res += dfs(grid, i, j+1, m, n);
        res += dfs(grid, i, j-1, m, n);
        return res;
    }
public:
    int maxAreaOfIsland(vector<vector<int>>& grid) {
        int m = grid.size();
        if(m == 0) return 0;
        int n = grid[0].size();
        int ans = 0;
        for(int i = 0; i < m; ++i) {
            for(int j = 0; j < n; ++j) {
                if(grid[i][j] == 1) {
                    ans = max(dfs(grid, i, j, m, n), ans);
                }
            }
        }
        return ans;
    }
};