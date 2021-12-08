/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
  let chars = new Array(128).fill(0);
  let flag = new Array(128).fill(false);
  for(let i = 0; i < t.length; i++) {
      chars[t.charCodeAt(i)] ++;
      flag[t.charCodeAt(i)] = true;
  }
  
  let left = 0;
  let right = 0;
  let valid = 0;
  let start = 0;
  let end = 0;
  let len = Infinity;
  
  while(right < s.length) {
      let code = s.charCodeAt(right);
      if(flag[code]) {
          if(-- chars[code] >= 0) {
              ++ valid;
          }                        
          while(valid === t.length) {            
              if((right - left + 1) < len) {                    
                  len = right - left + 1;
                  start = left;
                  end = right;
              }
              if(flag[s.charCodeAt(left)] && ++chars[s.charCodeAt(left)] > 0) {
                  -- valid;
              }
              ++left;
          }
      }
      
      right ++;
  }
  return len === Infinity ? '' : s.substring(start, end+1);
};