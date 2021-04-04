## 剑指offer55-2-平衡二叉树

输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

示例 1:

给定二叉树 [3,9,20,null,null,15,7]
```
    3
   / \
  9  20
    /  \
   15   7
返回 true 。
```

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]
```
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。
```

限制：
```
0 <= 树的结点个数 <= 10000
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root == null) return true;
    function dfs(node) {
        if(node == null) return 0;
        let left = dfs(node.left);
        let right = dfs(node.right);
        return 1 + Math.max(left, right);
    }
    let left = dfs(root.left);
    let right = dfs(root.right);
    // 要注意这里我们dfs后不仅仅要判断左子树和右子树之间的差值
    // 而且我们要注意的是左子树和右子树自身是不是平衡的
    return Math.abs(left-right) <= 1 && isBalanced(root.left) && isBalanced(root.right); 
};
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    return dfs(root) !== -1;
};

function dfs(node) {
    if(node == null) return 0;
    let left = dfs(node.left);
    if(left === -1) return -1;
    let right = dfs(node.right);
    if(right === -1) return -1;
    return Math.abs(left-right) < 2 ? Math.max(left, right) + 1:-1;
}
```