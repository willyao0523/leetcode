## 剑指offer32-2-从上到下打印二叉树2

从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

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
  [9,20],
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
    if(root == null) return ans;
    let q = [];
    q.push(root);
    while(q.length > 0) {
        let path = [];
        let len = q.length;
        for(let i = 0; i < len; i++) {
            let node = q.shift();
            path.push(node.val);
            node.left && q.push(node.left);
            node.right && q.push(node.right);
        }
        ans.push(path);
    }
    return ans;
};
```