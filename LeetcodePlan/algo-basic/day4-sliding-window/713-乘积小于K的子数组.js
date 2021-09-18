// 给定一个正整数数组 nums和整数 k 。

// 请找出该数组内乘积小于 k 的连续的子数组的个数。

//  

// 示例 1:

// 输入: nums = [10,5,2,6], k = 100
// 输出: 8
// 解释: 8个乘积小于100的子数组分别为: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]。
// 需要注意的是 [10,5,2] 并不是乘积小于100的子数组。
// 示例 2:

// 输入: nums = [1,2,3], k = 0
// 输出: 0
//  

// 提示: 

// 1 <= nums.length <= 3 * 104
// 1 <= nums[i] <= 1000
// 0 <= k <= 106

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {
  if(k === 0 || k === 1) return 0;
  let left = 0, right = 0, product = 1, res = 0
  const n = nums.length
  while(right < n) {        
      product *= nums[right]
      while(product >= k) {
          product /= nums[left]
          left ++
      }
      res += right-left+1
      right ++;        
  }
  return res
};