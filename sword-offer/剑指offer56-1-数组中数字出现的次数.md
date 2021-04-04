## 剑指offer56-1-数组中数字出现的次数

一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

示例 1：
```
输入：nums = [4,1,4,6]
输出：[1,6] 或 [6,1]
```

示例 2：
```
输入：nums = [1,2,10,4,1,4,3,3]
输出：[2,10] 或 [10,2]
``` 

限制：
```
2 <= nums.length <= 10000
```

### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let res = [];
    for(let num of nums) {
        if(nums.indexOf(num) === nums.lastIndexOf(num)) 
            res.push(num);
    }
    return res;
};
```

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    const map = new Map();
    for(const num of nums) {
        if(!map.has(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num)+1);
        }
    }
    let res = [];
    for(const key of map.keys()) {
        if(map.get(key) === 1) {
            res.push(key);
        }
    }
    return res;
};
```