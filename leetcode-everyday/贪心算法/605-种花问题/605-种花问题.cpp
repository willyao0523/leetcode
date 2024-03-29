class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int m = flowerbed.size();
        int count = 0, prev = -1;
        for(int i = 0; i < m; i++) {
            if(flowerbed[i] == 1) {
                if(prev < 0) {
                    count += i / 2;
                } else {
                    count += (i - prev - 2) / 2; 
                }
                if(count >= n) return true;
                prev = i;
            }
        }
        if(prev < 0) {
            count += (m + 1) / 2;            
        } else {
            count += (m - prev - 1) / 2;
        }
        return count >= n;
    }
};