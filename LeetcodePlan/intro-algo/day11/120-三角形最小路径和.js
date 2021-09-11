// 给定一个三角形 triangle ，找出自顶向下的最小路径和。

// 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

//  

// 示例 1：

// 输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// 输出：11
// 解释：如下面简图所示：
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
// 示例 2：

// 输入：triangle = [[-10]]
// 输出：-10
//  

// 提示：

// 1 <= triangle.length <= 200
// triangle[0].length == 1
// triangle[i].length == triangle[i - 1].length + 1
// -104 <= triangle[i][j] <= 104

/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
  const m = triangle.length, n = triangle[m-1].length
  const dp = Array(m).fill().map(() => Array(n).fill(Infinity))
  dp[0][0] = triangle[0][0]
  for(let i = 1; i < m; i++) {
      dp[i][0] = triangle[i][0] + dp[i-1][0]
  }
  for(let i = 1; i < m; i++) {
      const p = triangle[i].length
      for(let j = 1; j < p; j++) {
          dp[i][j] = triangle[i][j] + 
              Math.min(dp[i-1][j], dp[i-1][j-1])                                         
      }        
  }
  let min = Infinity
  for(let i = 0; i < n; i++) {
      min = Math.min(min, dp[m-1][i])
  }
  return min
};