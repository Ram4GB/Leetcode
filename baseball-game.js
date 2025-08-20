/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const history = [];
    for (let i = 0 ; i < operations.length; i++) {
      if (!isNaN(operations[i])) {
        history.push(Number(operations[i]))
      } else {
        if (operations[i] === '+') {
          history.push(history[history.length-1] + history[history.length-2])
        } else if (operations[i] === 'D') {
          history.push(history[history.length-1] * 2)
        } else {
          history.pop();
        }
      }
    }

    return history.reduce((prev, cur) => prev+cur,0)
};

console.log(calPoints(["5","2","C","D","+"]))