/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  const ans = [];
  if(!nums.length) return ans;
  const visited = new Array(nums.length).fill(false); 
  dfs(nums, visited, [], ans);
  return ans;
};

function dfs(nums, visited, path, ans) {
  if(path.length === nums.length) {
      ans.push([...path]);
  }
  for(let i = 0; i < nums.length; i++) {
      if(visited[i]) continue;
      visited[i] = true;
      path.push(nums[i]);
      dfs(nums, visited, path, ans);
      visited[i] = false;
      path.pop();
  }
}