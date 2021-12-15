/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
  let m = candidates.length;
  candidates.sort((a, b) => a-b);
  const visited = new Array(m).fill(false);
  const ans = [];
  dfs(candidates, target, 0, 0, [], visited, ans);
  return ans;
};

function dfs(candidates, target, start, pos, path, visited, ans) {    
  if(pos === target) {
      ans.push([...path]);
      return;
  }
  for(let i = start; i < candidates.length; ++i) {
      if(visited[i]) continue;
      if(i > 0 && candidates[i] === candidates[i-1] && !visited[i-1]) continue;
      if(pos + candidates[i] > target) break;
      visited[i] = true;        
      dfs(candidates, target, i+1, pos + candidates[i], [...path, candidates[i]], visited, ans);
      visited[i] = false;
  }
}
