class Solution {
public:
    string findLongestWord(string s, vector<string>& dictionary) {
        string res = "";
        int start = 0, left = 0;
        for(int i = 0; i < dictionary.size(); i++) {
            string str = dictionary[i];
            while(start < s.size() && left < str.size()) {
                if(s[start] == str[left]) {                    
                    left ++;
                }
                start ++;
            }           
            if(left == str.length()) {                                 
                if(str.length() > res.length() || (str.length() == res.length() && str.compare(res) < 0)) {
                    res = str;
                }
            }                                    
            start = 0;
            left = 0;
        }                
        return res;
    }
};