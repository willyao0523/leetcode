/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
  const ans = [];
  if(k > n) return ans;
  dfs(n, k, 1, [], ans);
  return ans;
};

function dfs(n, k, pos, path, ans) {
  if(path.length === k) {
      ans.push([...path]);
      return;
  }
  for(let i = pos; i <= n; i++) {
      path.push(i);
      dfs(n, k, i+1, path, ans);
      path.pop();
  }
}