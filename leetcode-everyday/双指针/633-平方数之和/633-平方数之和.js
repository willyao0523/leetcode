/**
 * @param {number} c
 * @return {boolean}
 */
 var judgeSquareSum = function(c) {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));
  while(left <= right) {
      let sum = left * left + right * right;
      if(sum === c) {
          return true;
      } else if(sum > c) {
          -- right;
      } else {
          ++ left;
      }
  }
  return false;
};