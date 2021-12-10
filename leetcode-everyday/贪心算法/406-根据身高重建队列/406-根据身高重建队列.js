/**
 * @param {number[][]} people
 * @return {number[][]}
 */
 var reconstructQueue = function(people) {
   // 这里js的sort要注意
  people.sort((a, b) => {
      if(a[0] !== b[0]) return b[0] - a[0];
      return a[1] - b[1];
  })
  const res = [];
  for(const person of people) {
      res.splice(person[1], 0, person);
  }
  return res;
};