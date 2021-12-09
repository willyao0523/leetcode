class Solution {
private:
    int lower_bound(vector<int>& nums, int target) {
        int left = 0, right = nums.size()-1;
        while(left <= right) {
            int mid = left + (right - left) / 2;
            if(nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
    int higher_bound(vector<int>& nums, int target) {
        int left = 0, right = nums.size()-1;
        while(left <= right) {
            int mid = left + (right - left) / 2;
            if(nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return right;
    }
public:
    vector<int> searchRange(vector<int>& nums, int target) {        
        int lower = lower_bound(nums, target);
        int higher = higher_bound(nums, target);
        if(lower > higher) {
            return vector<int>{-1, -1};
        }
        return vector<int>{lower, higher};
    }
};