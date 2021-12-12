class Solution {
private:
    void dfs(int n, int k, int pos, vector<int>& path, vector<vector<int>>& ans) {
        if(path.size() == k) {
            ans.push_back(path);
            return;
        }
        for(int i = pos; i <= n; ++i) {            
            path.push_back(i);
            dfs(n, k, i+1, path, ans);            
            path.pop_back();
        }
    }
public:
    vector<vector<int>> combine(int n, int k) {
        vector<vector<int>> ans;
        if(k > n) return ans;
        vector<bool> visited;
        vector<int> path;        
        dfs(n, k, 1, path, ans);        
        return ans;
    }
};