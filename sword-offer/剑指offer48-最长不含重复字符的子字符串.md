## 剑指offer48-最长不含重复字符的子字符串

请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

示例 1:
```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

示例 2:
```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

示例 3:
```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
``` 

提示：
```
s.length <= 40000
```

### JavaScript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let res = 0, tmp = 0;
    for(let j = 0; j < s.length; j++) {
        let i = map.has(s.charAt(j)) ? map.get(s.charAt(j)) : -1;
        map.set(s.charAt(j), j);
        tmp = tmp < j - i ? tmp+1 : j-i;
        //console.log(tmp + " i: " + i + " j: " + j);
        res = Math.max(res, tmp);
    }
    return res;
};

// p w w k e w
// tmp 1 i: -1 j: 0
// tmp 2 i: -1 j: 1
// tmp 1 i: 1 j: 2
// tmp 2 i: -1 j: 3
// tmp 3 i: -1 j: 4
// tmp 3 i: 2 j: 5
```