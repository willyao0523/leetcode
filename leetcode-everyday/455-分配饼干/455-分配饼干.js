/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
  const children = g.sort((a, b) => a-b)    
  const cookies = s.sort((a, b) => a-b)    
  let child = 0
  let cookie = 0
  while(child < children.length && cookie < cookies.length) {
      // 当前的cookie是可以满足当前的孩子时，则说明该孩子吃饱了
      if(cookies[cookie] >= children[child]) child++
      // 如果最小的cookie不能满足，则其对于后续的对比无意义
      cookie ++
  }
  return child
};