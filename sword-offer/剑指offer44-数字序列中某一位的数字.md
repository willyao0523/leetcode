## 剑指offer44-数字序列中某一位的数字

数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。

请写一个函数，求任意第n位对应的数字。

示例 1：
```
输入：n = 3
输出：3
```

示例 2：
```
输入：n = 11
输出：0
``` 

限制：
```
0 <= n < 2^31
```

### JavaScript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let digit = 1, start = 1, count = 9;
    while(n > count) {
        n -= count;
        start *= 10;      // 1, 10, 100, ...
        digit += 1;       // 1, 2, 3, ...
        count = 9 * digit * start; // 9, 180, 2700, ...
    }
    let num = start + Math.floor((n-1)/digit);
    return num.toString().charAt(Math.floor((n-1)%digit)) - '0';
};

// 0 1 2 3 4 5 6 7 8 9
// 10 11 12 13 14 15 16 17 18 19   23/10
// 20 ...


// 15 -> start:1 dight:1 count:9
// 6   -> start:10 dight:2 count:180
```