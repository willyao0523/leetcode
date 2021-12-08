class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& points) {
        if(points.empty()) return 0;
        if(points.size() == 1) return 1;
        sort(points.begin(), points.end(), [](vector<int>& a, vector<int>& b) {
            return a[0] < b[0];
        });
        int res = 1, prev = points[0][1];
        for(int i = 1; i < points.size(); i++) {
            if(prev >= points[i][0]) {
                prev = min(prev, points[i][1]);
            } else {
                res ++;
                prev = points[i][1];
            }
        }
        return res;
    }
};