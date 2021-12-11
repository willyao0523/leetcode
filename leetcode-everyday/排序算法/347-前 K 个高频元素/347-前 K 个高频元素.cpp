class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        // [1,1,1,2,2,3]
        unordered_map<int, int> counts;
        int max_count = 0;
        for(const int & num : nums) {
            max_count = max(max_count, ++ counts[num]);
        }
        // {
        //     1: 3,
        //     2: 2,
        //     3: 1
        // }
        // 3

        vector<vector<int>> buckets(max_count + 1);
        // [[], [], [], []]
        for(const auto & p : counts) {
            buckets[p.second].push_back(p.first);
        }
        // [[], [3], [2], [1]]

        vector<int> ans;
        for(int i = max_count; i >= 0 && ans.size() < k; --i) {
            for(const int & num: buckets[i]) {
                ans.push_back(num);
                if(ans.size() == k) {
                    break;
                }
            }
        }
        return ans;
    }
};