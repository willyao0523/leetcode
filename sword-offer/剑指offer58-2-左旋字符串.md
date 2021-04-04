## 剑指offer-2-左旋字符串

字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

示例 1：
```
输入: s = "abcdefg", k = 2
输出: "cdefgab"
```

示例 2：
```
输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"
``` 

限制：
```
1 <= k < s.length <= 10000
```

### Java
```java
class Solution {
    public String reverseLeftWords(String s, int n) {
        if(s == null || s.length() == 0) return "";
        int len = s.length();
        int m = n % len;        
        return s.substring(m) + s.substring(0, m);
    }
}
```
```java
class Solution {
    public String reverseLeftWords(String s, int n) {
        if(s == null || s.length() == 0) return "";
        StringBuilder sb = new StringBuilder();
        for(int i = n; i < n + s.length(); i++) {
            sb.append(s.charAt(i % s.length()));
        }
        return sb.toString();
    }
}
```

### JavaScript
```javascript
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    return s.substring(n) + s.substring(0, n);
};  
```
```javascript
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    return s.slice(n) + s.slice(0, n);
};  
```
```javascript
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let l = r = '';
    for(let c of s) {
        n-- > 0 ? (r += c) : (l += c);
    }

    return l + r;
};  
```