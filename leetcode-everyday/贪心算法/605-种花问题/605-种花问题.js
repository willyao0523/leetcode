/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;
  const size = flowerbed.length;
  let prev = -1;
  for(let i = 0; i < size; i++) {
      if(flowerbed[i] === 1) {
          if(prev < 0) {
              count += Math.floor(i / 2);
          } else {
              count += Math.floor((i - prev - 2) / 2);
          }
          if(count >= n) return true;
          prev = i;
      }        
  }
  if(prev < 0) {
      count += Math.floor((size + 1) / 2);
  } else {
      count += Math.floor((size - prev - 1) / 2);
  }
  return count >= n;
};