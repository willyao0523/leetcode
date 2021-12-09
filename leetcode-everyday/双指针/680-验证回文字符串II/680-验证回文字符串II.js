/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
  let left = 0;
  let right = s.length-1;    
  while(left <= right) {
      if(s.charAt(left) === s.charAt(right)) {
          left ++;
          right --;
      } else {
          return helper(s, left+1, right) || helper(s, left, right-1);
      }
  }
  return true;
};

function helper(s, left, right) {
  while(left < right) {
      if(s.charAt(left) === s.charAt(right)) {
          left ++;
          right --;
      } else {
          return false;
      }
  }
  return true;
}