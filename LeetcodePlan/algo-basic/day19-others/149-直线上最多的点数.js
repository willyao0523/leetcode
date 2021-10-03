// 给你一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点。求最多有多少个点在同一条直线上。

//  

// 示例 1：


// 输入：points = [[1,1],[2,2],[3,3]]
// 输出：3
// 示例 2：


// 输入：points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// 输出：4
//  

// 提示：

// 1 <= points.length <= 300
// points[i].length == 2
// -104 <= xi, yi <= 104
// points 中的所有点 互不相同

/**
 * @param {number[][]} points
 * @return {number}
 */
 var maxPoints = function(points) {
  const n = points.length
  if(n < 3) return n
  let res = 0
  for(let i = 0; i < n; i++) {
      for(let j = i+1; j < n; j++) {
          let count = 2
          const dy = points[j][1] - points[i][1]
          const dx = points[j][0] - points[i][0]
          for(let k = j+1; k < n; k++) {
              if(dx*(points[k][1]-points[j][1]) === dy*(points[k][0]-points[j][0])) {
                  count ++
              }
          }
          res = Math.max(res, count)
          if(res > Math.floor(n/2)) {
              break
          }
      }
      if(res > Math.floor(n/2)) {
          break
      }
  }
  return res
};