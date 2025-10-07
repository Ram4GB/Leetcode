/**
 * @param {string} s
 */
const checkNestedString = (s) => {
  let c = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      c++;
    } else {
      if (c === 0) return false;
      c--;
    }
  }
  return c === 0;
};

function nested(S) {
  let open = 0;
  let i = 0;
  while (i < S.length) {
    if (S[i] == "(") open = open + 1;
    else {
      open = open - 1;
      if (open < 0) return false;
    }
    i = i + 1;
  }
  if (open > 0) return false;
  return false;
}

console.log(`')('`, checkNestedString(")("), nested(")("));
console.log(`'()'`, checkNestedString("()"), nested("()"));
console.log(`'()()()'`, checkNestedString("()()()"), nested("()()()"));
console.log(`'(()())()'`, checkNestedString("(()())()"), nested("(()())()"));
console.log(`'))'`, checkNestedString("))"), nested("))"));
console.log(`'())'`, checkNestedString("())"), nested("())"));
console.log(`'())('`, checkNestedString("())("), nested("())("));
console.log(`'(())'`, checkNestedString("(())"), nested("(())"));
console.log(`'(())()'`, checkNestedString("(())()"), nested("(())()"));
console.log(`'((())())'`, checkNestedString("((())())"), nested("((())())"));
console.log(`'((())()())'`, checkNestedString("((())()())"), nested("((())()())"));
console.log(`')'`, checkNestedString(")"), nested(")"));
console.log(`'('`, checkNestedString("("), nested("("));
console.log(`'()()()('`, checkNestedString("()()()("), nested("()()()("));
console.log(`'((((((()))))))()'`, checkNestedString("((((((()))))))()"), nested("((((((()))))))()"));
console.log(`'((((((()))))))()'`, checkNestedString("(((((((()))))))())"), nested("(((((((()))))))())"));
