class Solution {
private:
    void dfs(vector<int>& nums, vector<bool>& visited, vector<int>& path, vector<vector<int>>& ans) {
        if(path.size() == nums.size()) {
            ans.push_back(path);
            return;
        }
        for(int i = 0; i < nums.size(); ++i) {
            if(visited[i]) continue;
            visited[i] = true;
            path.push_back(nums[i]);
            dfs(nums, visited, path, ans);
            visited[i] = false;
            path.pop_back();
        }
    }
public:
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> ans;
        if(nums.empty()) return ans;
        vector<bool> visited(nums.size(), false);
        vector<int> path;
        dfs(nums, visited, path, ans);
        return ans;
    }
};