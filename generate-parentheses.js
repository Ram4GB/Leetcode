/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = [];
  const backtracking = (s, l, r) => {
    // is this the answer?
    if (l === n && r === n) {
      return ans.push(s);
    }

    // can we add (
    // (((
    if (l < n) {
      l++;
      backtracking(s + '(', l, r);
      l--;
    }
    // can we add )
    if (r < n && s.length > 0 && l > r) {
      r++;
      backtracking(s + ")", l, r);
      r--;
    }
  };

  backtracking("", 0, 0);

  return ans;
};

// console.log(generateParenthesis(1));
// console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
console.log(generateParenthesis(4));
