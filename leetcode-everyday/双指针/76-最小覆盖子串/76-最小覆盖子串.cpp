class Solution {
public:
    string minWindow(string s, string t) {
        vector<int> chars(128, 0);
        vector<bool> flag(128, false);
        for(int i = 0; i < t.size(); ++i) {
            ++chars[t[i]];
            flag[t[i]] = true;
        }
        int left = 0, right = 0, start = 0, end = 0, valid = 0, len = INT_MAX;
        while(right < s.size()) {
            if(flag[s[right]]) {
                if(--chars[s[right]] >= 0) {
                    ++valid;
                }
                while(valid == t.size()) {
                    if((right - left + 1) < len) {
                        len = right - left + 1;
                        start = left;
                        end = right;
                    }
                    if(flag[s[left]] && ++chars[s[left]] > 0) {
                        --valid;
                    }
                    ++left;
                }
            }
            right ++;
        }        
        return len == INT_MAX ? "" : s.substr(start, len);
    }
};