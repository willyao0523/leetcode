/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * https://leetcode-cn.com/problems/truncate-sentence/
 */
 var truncateSentence = function(s, k) {
  const arr = s.split(" ")
  return arr.slice(0, k).join(" ")
};