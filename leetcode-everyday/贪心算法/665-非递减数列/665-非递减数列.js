/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var checkPossibility = function(nums) {
  if(nums.length === 1) return true;
  let valid = 1;
  for(let i = 0; i < nums.length-1; i++) {
      let x = nums[i];
      let y = nums[i+1];
      if(x > y) {
          -- valid;
          if(valid < 0) {
              return false;
          }
          if(i > 0 && y < nums[i-1]) {
              nums[i+1] = x;
          }
      }
  }  
  return true;
};