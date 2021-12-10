class Solution {
public:
    vector<vector<int>> reconstructQueue(vector<vector<int>>& people) {
        vector<vector<int>> res;
        sort(people.begin(), people.end(), [](const vector<int>& a, const vector<int>& b) {
            return a[0] > b[0] || (a[0] == b[0] && a[1] < b[1]);
        });
        // [[7, 0], [7, 1], [6,1], [5, 0], [5, 2], [4, 4]]
        for(const vector<int>& person: people) {
            res.insert(res.begin() + person[1], person);
        }
        return res;
    }
};