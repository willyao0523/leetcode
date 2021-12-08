/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function(s) {
  // 我们要把这个字符串划分为尽可能多的片段 => 极端情况就是每一个字母都是一个字符串，此时片段数量即为字符串的长度
  if(!s.length) return [];
  if(s.length === 1) return [1];    
  let res = [];
  // const map = new Map()
  // for(let i = 0; i < s.length; i++) {
  //     const ch = s.charAt(i);
  //     if(!map.has(ch)) {
  //         map.set(ch, 1);
  //     } else {
  //         map.set(ch, map.get(ch)+1);
  //     }
  // }

  // 这一处的优化快了24ms，多击败了43%的用户    
  const map = new Array(26).fill(0);
  for(let i = 0; i < s.length; i++) {
      const key = s.charCodeAt(i) - 97
      map[key] += 1;
  }
      
  let tmp = 0;
  let tmpNum = 0;
  let tmpArr = [];
  for(let i = 0; i < s.length; i++) {        
      const ch = s.charAt(i);
      const key = s.charCodeAt(i) - 97;
      if(!tmpArr.includes(ch)) {
          tmpArr.push(ch);
          tmp += 1;
          tmpNum += (map[key] - 1)            
      } else {
          tmpNum -= 1
          tmp += 1
      }
      if(tmpNum === 0) {
          res.push(tmp);
          tmp = 0;
          tmpNum = 0;
          tmpArr = [];
      }
  }
  return res;
};

// 尽然比上面的还要慢十几毫秒
// /**
//  * @param {string} s
//  * @return {number[]}
//  */
//  var partitionLabels = function(s) {
//   const res = []
//   if(!s) return res;
//   const map = new Array(26).fill(0);
//   for(let i = 0; i < s.length; i++) {
//       map[s.charCodeAt(i) - 97] = i;
//   }
//   let start = 0, end = 0;
//   for(let i = 0; i < s.length; i++) {
//       end = Math.max(end, map[s.charCodeAt(i) - 97]);
//       if(i === end) {
//           res.push(end - start + 1);
//           start = end + 1;
//       }
//   }
//   return res;
// };