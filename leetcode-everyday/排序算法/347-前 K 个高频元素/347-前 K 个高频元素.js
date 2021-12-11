/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  const counts = new Map();
  let max_count = 0;
  for(let num of nums) {
      if(counts.has(num)) {
          counts.set(num, counts.get(num) + 1);
      } else {
          counts.set(num, 1);
      }
      max_count = Math.max(max_count, counts.get(num));
  }

  const buckets = new Array(max_count+1).fill().map(() => []);    
  for(let [num, count] of counts) {
      buckets[count].push(num);
  }

  const ans = [];
  for(let i = max_count; i >= 0 && ans.length !== k; i--) {
      for(let num of buckets[i]) {
          ans.push(num);
          if(ans.length === k) {
              break;
          }
      }
  }
  return ans;
};