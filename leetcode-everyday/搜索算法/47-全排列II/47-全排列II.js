/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
  let m = nums.length;
  const ans = [];
  const visited = new Array(m).fill(false);
  nums.sort((a,b) => a-b);
  dfs(nums, ans, [], visited);
  return ans;
};

function dfs(nums, ans, path, visited) {
  if(path.length === nums.length) {
      ans.push([...path]);
      return;
  }
  for(let i = 0; i < nums.length; ++i) {
      if(visited[i] || (i >= 1 && nums[i] === nums[i-1] && !visited[i-1])) {
          continue;
      }
      visited[i] = true;
      dfs(nums, ans, [...path, nums[i]], visited);
      visited[i] = false;
  }
}