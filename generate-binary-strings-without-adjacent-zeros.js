/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
  const ans = [];

  const backtracking = (arr) => {
    if (arr.length === n) {
      ans.push(arr.join(""));
      return;
    }

    if (arr.length === 0 || arr[arr.length - 1] === 1) {
      for (let i = 0; i <= 1; i++) {
        arr.push(i);
        backtracking(arr);
        arr.pop();
      }
    } else {
      arr.push(1);
      backtracking(arr);
      arr.pop();
    }
  };

  backtracking([]);

  return ans;
};

console.log(validStrings(3));
console.log(validStrings(1));
console.log(validStrings(2));
