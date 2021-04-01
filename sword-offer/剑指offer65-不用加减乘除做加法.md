## 剑指offer65-不用加减乘除做加法
写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。

示例:
```
输入: a = 1, b = 1
输出: 2
```

提示：
```
a, b 均可能是负数或 0
结果不会溢出 32 位整数
```

### Java
```java
class Solution {
    public int add(int a, int b) {
        while(b != 0) {
            // 与运算对应为值得到该位置是否进入，如果为1&1那么就变成10但是我们需要的是进位所以左移一位
            // c为进位
            int c = (a & b) << 1;            
            // 对应位异或运算得到该位置的非进位的和，01 10 均得到1 而00 11得到是0（因为11会进位）
            a ^= b; // a为非进位和 也就是结果的对应位置            
            b = c;  // b为进位                      
        }
        return a;
    }
}
```

### JavaScript
```javascript
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
    while(b != 0) {
        let c = (a&b) << 1;
        a ^= b;
        b = c;
    }
    return a;
};
```