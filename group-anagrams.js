/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const hash = new Map();

  const countStr = (str) => {
    let sum = []
    for(let i = 0 ; i < str.length; i++) {
      const pos = str.charCodeAt(i)
      sum.push(pos)
    }
    sum.sort((a,b) => a-b);
    return sum.toString();
  }

  for (let i = 0 ; i < strs.length; i++) {
    const str = strs[i];
    const key = countStr(str);
    if (!hash.has(key)) {
      hash.set(key, [str])
    } else {
      hash.get(key).push(str)
    }
  }

  const res = [];
  
  for (let [k,v] of hash) {
    res.push(v)
  }

  return res;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
// console.log(groupAnagrams(["ac","c"]))
// console.log(groupAnagrams(["ac","d"]))