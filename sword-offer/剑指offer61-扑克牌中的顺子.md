## 剑指offer61-扑克牌中的顺子
从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

示例 1:
```
输入: [1,2,3,4,5]
输出: True
``` 

示例 2:
```
输入: [0,0,1,2,5]
输出: True
``` 

限制：
```
数组长度为 5 
数组的数取值为 [0, 13] .
```

### Java
```java
class Solution {
    public boolean isStraight(int[] nums) {
        Set<Integer> set= new HashSet<>();
        int max = 0, min = 14;
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] == 0) continue;
            max = Math.max(max, nums[i]);
            min = Math.min(min, nums[i]);
            if(set.contains(nums[i])) return false;
            else set.add(nums[i]);
        }    
        return max - min < 5;
    }
}
```
```java
class Solution {
    public boolean isStraight(int[] nums) {
        int joker = 0;
        Arrays.sort(nums);
        for(int i = 0; i < nums.length-1; i++) {
            if(nums[i] == 0) joker ++;
            else if(nums[i] == nums[i+1]) {
                return false;
            }
        }
        return nums[4] - nums[joker] < 5;
    }
}
```

### JavaScript
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    let container = new Set();
    let max = 0, min = 14;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) continue;
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[i]);
        if(container.has(nums[i])) return false;
        else container.add(nums[i]);
    }
    return max - min < 5;
};
```
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    let joker = 0;
    nums.sort((a,b) => a-b);
    for(let i = 0; i < nums.length-1; i++) {
        if(nums[i] === 0) joker ++;
        else if(nums[i] === nums[i+1]) return false;
    }
    return nums[4] - nums[joker] < 5;
};
```
