// 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用一次。

// 注意：解集不能包含重复的组合。 

//  

// 示例 1:

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 输出:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// 示例 2:

// 输入: candidates = [2,5,2,1,2], target = 5,
// 输出:
// [
// [1,2,2],
// [5]
// ]
//  

// 提示:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
  const res = [], visited = Array(candidates.length).fill(false)
  candidates.sort((a,b) => a-b)
  helper(candidates, target, visited, 0, [], res)
  return res
};

function helper(candidates, target, visited, s, path, res) {
  if(target === 0) {
      res.push([...path])
      return
  }
  for(let i = s; i < candidates.length; i++) {
      if(visited[i]) continue;
      if(i > 0 && candidates[i] === candidates[i-1] && !visited[i-1]) continue;
      const newTarget = target - candidates[i]
      if(newTarget < 0) break;
      visited[i] = true
      path.push(candidates[i])
      helper(candidates, newTarget, visited, i+1, path, res)
      visited[i] = false
      path.pop()
  }
}