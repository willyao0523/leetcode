class Solution {
public:
    bool checkPossibility(vector<int>& nums) {
        int valid = 1;
        for(int i = 0; i < nums.size()-1; i++) {
            int x = nums[i], y = nums[i+1];
            if(x > y) {
                -- valid;
                if(valid < 0) return false;
                if(i > 0 && y < nums[i-1]) {
                    nums[i+1] = x;
                }
            }
        }
        return true;
    }
};