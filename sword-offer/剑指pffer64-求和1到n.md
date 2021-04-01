## 剑指pffer64-求和1到n
求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

示例 1：
```
输入: n = 3
输出: 6
```

示例 2：
```
输入: n = 9
输出: 45
``` 

限制：
```
1 <= n <= 10000
```

### JavaScript
- 尾递归？
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    return helper(n, 1);
};

function helper(n, sum) {
    if(n == 1) return sum;
    return helper(n-1, n+sum);
}
```
- 一般递归
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    if(n==1) return 1;
    return n + sumNums(n-1);
};
```