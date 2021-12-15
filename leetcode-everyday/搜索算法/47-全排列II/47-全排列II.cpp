class Solution {
private:
    void dfs(vector<int>& nums, vector<vector<int>>& ans, vector<int>& path, vector<bool>& visited) {
        if(path.size() == nums.size()) {
            ans.push_back(path);
            return;
        }
        for(int i = 0; i < nums.size(); ++i) {
            if(visited[i]) continue;
            if(i >= 1 && nums[i] == nums[i-1] && !visited[i-1]) continue;
            visited[i] = true;
            path.push_back(nums[i]);
            dfs(nums, ans, path, visited);
            path.pop_back();
            visited[i] = false;
        }
    }
public:
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        int m = nums.size();
        vector<bool> visited(m, false);
        vector<vector<int>> ans;
        vector<int> path;
        // sort(nums.begin(), nums.end(), [](int a, int b) {
        //     return a < b;
        // });
        sort(nums.begin(), nums.end());
        dfs(nums, ans, path, visited);
        return ans;
    }
};