class Solution {
public:
    int candy(vector<int>& ratings) {
        int size = ratings.size();
        if(size < 2) return size;
        vector<int> nums(size, 1);
        for(int i = 1; i < size; ++i) {
            if(ratings[i] > ratings[i-1]) {
                // 当右侧的孩子得分更高时需要比左侧的多一个糖果
                nums[i] = nums[i-1] + 1;
            }
        }
        for(int i = size - 1; i > 0; --i) {
            if(ratings[i] < ratings[i-1]) {
                // 这里需要注意的是：需要注意至少多少颗糖果，如果结果是这个小孩已经获得了比两侧多一个的糖果则不需要获取另外的糖果
                nums[i-1] = max(nums[i-1], nums[i]+1);
            }
        }
        return accumulate(nums.begin(), nums.end(), 0);
    }
};