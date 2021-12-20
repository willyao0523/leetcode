class Solution {
public:    
    bool canPartition(vector<int>& nums) {
        if(nums.size() <= 1) return false;
        int sum = accumulate(nums.begin(), nums.end(), 0);
        if(sum % 2 == 1) return false;
        int target = sum / 2, n = nums.size();
        vector<vector<bool>> dp(n+1, vector<bool>(target+1, false));
        dp[0][0] = true;
        for(int i = 1; i <= n; ++i) {
            for(int j = 0; j <= target; ++j) {
                if(j < nums[i-1]) {
                    dp[i][j] = dp[i-1][j];
                } else {
                    dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]];
                }
            }
        }        
        return dp[n][target];
    }
};


class Solution {
public:
    bool canPartition(vector<int>& nums) {
        if(nums.size() <= 1) return false;
        int sum = accumulate(nums.begin(), nums.end(), 0);
        if(sum % 2 == 1) return false;
        int target = sum / 2, n = nums.size();
        vector<bool> dp(target+1, false);
        dp[0] = true;
        for(int i = 1; i <= n; ++i) {
            for(int j = target; j >= nums[i-1]; --j) {
                dp[j] = dp[j] || dp[j-nums[i-1]];
            }
        }        
        return dp[target];
    }
};
