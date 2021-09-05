// 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。

// 换句话说，s1 的排列之一是 s2 的 子串 。

//  

// 示例 1：

// 输入：s1 = "ab" s2 = "eidbaooo"
// 输出：true
// 解释：s2 包含 s1 的排列之一 ("ba").
// 示例 2：

// 输入：s1= "ab" s2 = "eidboaoo"
// 输出：false
//  

// 提示：

// 1 <= s1.length, s2.length <= 104
// s1 和 s2 仅包含小写字母

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
  const n1 = s1.length, n2 = s2.length
  if(n1 > n2) return false

  const count1 = Array(26).fill(0), count2 = Array(26).fill(0)
  for(let i = 0; i < n1; i++) {
      ++count1[s1[i].charCodeAt() - 'a'.charCodeAt()]
  }
  let start = 0
  for(let i = 0; i < n2; i++) {
      ++count2[s2[i].charCodeAt() - 'a'.charCodeAt()]

      while(start <= i && count2[s2[start].charCodeAt() - 'a'.charCodeAt()] >
          count1[s2[start].charCodeAt() - 'a'.charCodeAt()]) {
              count2[s2[start].charCodeAt() - 'a'.charCodeAt()] --
              start ++
          }
      if(count1.toString() === count2.toString()) {
          return true
      }
  }
  return false
};