// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//  

// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 示例 2：

// 输入：nums = []
// 输出：[]
// 示例 3：

// 输入：nums = [0]
// 输出：[]
//  

// 提示：

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = []
  const n = nums.length
  nums.sort((a, b) => a-b)
  for(let i = 0; i < n-2; i++) {
      if(nums[i] > 0) break;
      if(i > 0 && nums[i] === nums[i-1]) continue;
      const target = -nums[i]
      let left = i+1, right = n-1
      while(left < right) {
          const sum = nums[left] + nums[right]
          if(sum === target) {
              res.push([nums[i], nums[left], nums[right]])
              while(left < right && nums[left] === nums[left+1]) {
                  left ++
              }
              while(left < right && nums[right] === nums[right-1]) {
                  right --
              }
              left ++
              right --
          } else if(sum > target) {
              right --
          } else {
              left ++ 
          }
      }
  }
  return res
};