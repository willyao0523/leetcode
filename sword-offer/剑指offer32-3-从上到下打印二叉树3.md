## 剑指offer32-3-从上到下打印二叉树3

请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

例如:
```
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
```
返回其层次遍历结果：
```
[
  [3],
  [20,9],
  [15,7]
]
``` 

提示：
```
节点总数 <= 1000
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans = [];
    if(!root) return ans;
    let q = [];
    q.push(root);
    let count = 1;
    while(q.length > 0) {
        const path = [];
        const len = q.length;
        for(let i = 0; i < len; i++) {
            const node = q.shift();
            if(count % 2 === 1) {                
                path.push(node.val);    
            }
            if(count % 2 === 0) {                
                path.unshift(node.val);
            }
            node.left && q.push(node.left);
            node.right && q.push(node.right);
        }
        ans.push(path);
        count ++;
    }
    return ans;
};
```