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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
  const ans = [];
  dfs(root, [], ans);
  return ans.map(item => item.join("->"));
};

function dfs(node, path, ans) {
  if(!node.left && !node.right) {
      ans.push([...path, node.val]);
      return
  }    
  if(node.left) {
      dfs(node.left, [...path, node.val], ans);
  }
  if(node.right) {
      dfs(node.right, [...path, node.val], ans);
  }    
}


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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
  const ans = [];
  dfs(root, [], ans);
  return ans
};

function dfs(node, path, ans) {
  if(node) {
      path += node.val;
      if(!node.left && !node.right) {
          ans.push(path);
      } else {
          path += "->";
          dfs(node.left, path, ans);
          dfs(node.right, path, ans);
      }
  }
}