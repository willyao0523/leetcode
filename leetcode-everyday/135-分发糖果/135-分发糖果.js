/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
  const size = ratings.length;
  if(size < 2) return size;
  const nums = Array(size).fill(1);
  for(let i = 0; i < size; i++) {
      if(ratings[i] > ratings[i-1]) {
          nums[i] = nums[i-1] + 1;
      }
  }
  for(let i = size; i > 0; i--) {
      if(ratings[i] < ratings[i-1]) {
          nums[i-1] = Math.max(nums[i-1], nums[i]+1);
      }
  }
  return nums.reduce((a, b) => a + b);
};