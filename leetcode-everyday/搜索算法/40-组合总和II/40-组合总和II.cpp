class Solution {
private:
    void dfs(vector<int>& candidates, int target, int start, vector<bool>& visited, vector<int>& path, vector<vector<int>>& ans) {
        if(target == 0) {
            ans.push_back(path);
            return;
        }
        for(int i = start; i < candidates.size(); ++i) {
            if(visited[i]) continue;
            if(i > 0 && candidates[i] == candidates[i-1] && !visited[i-1]) continue;
            if(target-candidates[i] < 0) break;
            visited[i] = true;
            path.push_back(candidates[i]);
            dfs(candidates, target-candidates[i], i+1, visited, path, ans);
            visited[i] = false;
            path.pop_back();
        }
    }
public:
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        vector<vector<int>> ans;
        int m = candidates.size();
        vector<bool> visited(m, false);
        vector<int> path;
        sort(candidates.begin(), candidates.end());
        dfs(candidates, target, 0, visited, path, ans);
        return ans;
    }
};