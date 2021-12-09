/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
  if(x === 0) return 0;
  let left = 0;
  let right = x;
  while(left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      const product = mid * mid;        
      if(product === x) {
          return mid;
      } else if(product > x) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return right;
};
