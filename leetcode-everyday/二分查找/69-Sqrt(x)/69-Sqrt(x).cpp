class Solution {
public:
    int mySqrt(int x) {
        if(x == 0) return 0;
        int left = 1, right = x, sqrt;
        while(left <= right) {
            int mid = left + (right - left) / 2;
            sqrt = x / mid;
            if(sqrt == mid) {
                return mid;
            } else if(sqrt < mid) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return right;
    }
};

class Solution {
public:
    int mySqrt(int x) {
        long res = x;
        while(res * res > x) {
            res = (res + x / res) / 2;
        }
        return res;
    }
};