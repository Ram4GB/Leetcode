/**
 * @param {string} s
 */
const roadSegment = (s) => {
  let i = 0;
  let ans = 0;
  while (i < s.length) {
    if (s[i] === 'X') {
      ans++;
      i+= 3;
    } else {
      i++;
    }
  }
  return ans;
}

console.log(roadSegment('.X..X'));
console.log(roadSegment('X.XXXXX.X.'));
console.log(roadSegment('XX.XXX..'));