/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
  if(!points.length) return 0;
  if(points.length === 1) return 1;
  points.sort((a, b) => a[0] - b[0])
  let res = 1;
  let prev = points[0][1];
  for(let i = 1; i < points.length; i++) {
      if(prev >= points[i][0]) {
          prev = Math.min(prev, points[i][1]);
      } else {
          res ++;
          prev = points[i][1];
      }
  }
  return res;
};