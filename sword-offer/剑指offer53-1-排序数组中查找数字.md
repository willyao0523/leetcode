## 剑指offer53-1-排序数组中查找数字

统计一个数字在排序数组中出现的次数。

示例 1:
```
输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
```

示例 2:
```
输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
``` 

限制：
```
0 <= 数组长度 <= 50000
```

### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lo = lowerBound(nums, target);
    let hi = upperBound(nums, target);
    if(lo > hi) return 0;
    return hi-lo+1;
};

function lowerBound(nums, target) {
    let lo = 0, hi = nums.length-1;
    while(lo <= hi) {
        let mid = Math.floor(lo + (hi-lo)/2);
        if(nums[mid] >= target) {
            hi = mid-1;
        } else {
            lo = mid+1;
        }
    }
    return lo;
}

function upperBound(nums, target) {
    let lo = 0, hi = nums.length-1;
    while(lo <= hi) {
        let mid = Math.floor(lo + (hi-lo)/2);
        if(nums[mid] <= target) {
            lo = mid+1;
        } else {
            hi = mid-1;
        }
    }
    return hi;
}
```

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) count++;
    }
    return count;
};
```