/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
private:
    void dfs(TreeNode* node, string path, vector<string>& ans) {
        if(node != nullptr) {
            path += to_string(node->val);
            if(node->left == nullptr && node->right == nullptr) {
                ans.push_back(path);
            } else {
                path += "->";
                dfs(node->left, path, ans);
                dfs(node->right, path, ans);
            }
        }
    }
public:
    vector<string> binaryTreePaths(TreeNode* root) {
        vector<string> ans;
        dfs(root, "", ans);
        return ans;
    }
};