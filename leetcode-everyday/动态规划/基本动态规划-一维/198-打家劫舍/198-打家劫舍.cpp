class Solution {
public:
    int rob(vector<int>& nums) {
        int prev = 0, next = nums[0], ans = nums[0];
        for(int i = 1; i < nums.size(); ++i) {
            ans = max(prev + nums[i], next);
            prev = next;
            next = ans;
        }
        return ans;
    }
};