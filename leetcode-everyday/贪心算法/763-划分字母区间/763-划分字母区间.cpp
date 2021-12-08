class Solution {
public:
    vector<int> partitionLabels(string s) {
        vector<int> res;
        if(s.empty()) return res;
        int m = s.size();        
        int map[26];
        for(int i = 0; i < m; i++) {
            map[s[i] - 'a'] = i;
        }
        int start = 0, end = 0;
        
        for(int i = 0; i < m; i++) {
            end = max(end, map[s[i] - 'a']);
            if(i == end) {
                res.push_back(end-start+1);
                start = end + 1;
            }            
        }
        return res;
    }
};