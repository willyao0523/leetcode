## 剑指offer54-二叉搜索树的第K大节点
给定一棵二叉搜索树，请找出其中第k大的节点。

示例 1:
```
输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4
```

示例 2:
```
输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4
```

限制：
```
1 ≤ k ≤ 二叉搜索树元素个数
```

### JavaScript
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let nums = [];
    dfs(root, nums);    
    return nums[nums.length-k];
};

function dfs(node, nums) {
    if(node == null) return;
    dfs(node.left, nums);
    nums.push(node.val);
    dfs(node.right, nums);
}
```

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
let ans, n;
var kthLargest = function(root, k) {
    n = k;
    dfs(root);
    return ans;
};

function dfs(node) {
    if(node == null) return;
    dfs(node.right);
    if(--n === 0) {
        ans = node.val;
        return;
    }
    dfs(node.left);
}


```