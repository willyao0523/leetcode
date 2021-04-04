## 剑指offer57-2-和为s的连续正整数序列

输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

示例 1：
```
输入：target = 9
输出：[[2,3,4],[4,5]]
```

示例 2：
```
输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
``` 

限制：
```
1 <= target <= 10^5
```

### JavaScript
```javascript
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let res = [];
    for(let i = 1; i < target; i++) {
        let path = [];
        path.push(i);
        let sum = i;
        for(let j = i+1; j < target; j++) {
            sum += j;
            path.push(j);
            if(sum > target) break;
            if(sum === target) {
                res.push(path);
                break;
            }
        }
        if(path.length === 2) break;
    }
    return res;
};
```