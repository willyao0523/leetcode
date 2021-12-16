class Solution {
public:
    int climbStairs(int n) {
        int prev = 0;
        int next = 1;
        int ans = 0;
        for(int i = 1; i <= n; ++i) {
            ans = prev + next;
            prev = next;
            next = ans;
        }
        return ans;
    }
};