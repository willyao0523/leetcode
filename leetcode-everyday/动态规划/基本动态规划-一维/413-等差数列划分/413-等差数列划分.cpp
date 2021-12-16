class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& nums) {
        int m = nums.size();
        if(m < 3) return 0;
        vector<int> dp(m, 0);
        for(int i = 2; i < m; ++i) {
            if(nums[i] - nums[i-1] == nums[i-1] - nums[i-2]) {
                dp[i] = dp[i-1] + 1;
            }
        }
        return accumulate(dp.begin(), dp.end(), 0);
    } 
};

// 1-2-3     1
// 1-2-3-4   3
// 1-2-3-4-5 6