// 给你两棵二叉树 root 和 subRoot 。检验 root 中是否包含和 subRoot 具有相同结构和节点值的子树。如果存在，返回 true ；否则，返回 false 。

// 二叉树 tree 的一棵子树包括 tree 的某个节点和这个节点的所有后代节点。tree 也可以看做它自身的一棵子树。

//  

// 示例 1：


// 输入：root = [3,4,5,1,2], subRoot = [4,1,2]
// 输出：true
// 示例 2：


// 输入：root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// 输出：false
//  

// 提示：

// root 树上的节点数量范围是 [1, 2000]
// subRoot 树上的节点数量范围是 [1, 1000]
// -104 <= root.val <= 104
// -104 <= subRoot.val <= 104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
  if(root == null) return false
  if(sameTree(root, subRoot)) return true
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

function sameTree(s, t) {
  if(s == null && t == null) {
      return true
  }
  if(s == null || t == null) {
      return false
  }
  return s.val == t.val && sameTree(s.left, t.left) && sameTree(s.right, t.right)
}