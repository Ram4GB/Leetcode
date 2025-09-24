/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    // convert numerator to array of number

    if (numerator === 0) return '0';

    if (numerator  % denominator === 0) return String(numerator / denominator)

    const arr =[];

    const getIsNegative = () => {
      if (numerator < 0 && denominator < 0) return false;
      if (numerator < 0 || denominator < 0) return true;
      return false; 
    }

    let isNagative = getIsNegative();
    
    if(numerator < 0) {
      numerator = -numerator;
    }
    if(denominator < 0) {
      denominator = -denominator;
    }
    
    while (numerator > 0) {
      const n = Math.floor(numerator / 10);
      const remain = numerator - n;
      const d = numerator - n * 10;
      arr.push(d);
      numerator = n;
    }

    arr.reverse();

    let s = 0;
    let hasRemain = true;
    let remain = 0;
    let index = 0;
    let num = arr[index];
    let dot = -1;
    const map = new Map();
    let reFirstIndex = -1;
    
    const ans = [];
    while (hasRemain) {
      // 0
      const integer = Math.floor(num / denominator);
      ans.push(integer);
      remain = num - integer * denominator;
      if (remain === 0 && index > arr.length-1) hasRemain = false;
      index++;
      if (index < arr.length) {
        const digit = arr[index];
        num = Number(String(remain) + String(digit));
      } else {
        if (dot === -1) {
          ans.push('.');
          dot = index;
          index++;
        }
        const digit = 0;
        num = Number(String(remain) + String(digit));
        if (!map.has(num)) {
          map.set(num, index);
        } else {
          hasRemain = false;
          reFirstIndex = map.get(num);
        }
      }
    }
    const integer = ans.slice(0, dot);
    const decimal = ans.slice(dot + 1);

    if (dot !== -1) {
      if (reFirstIndex === -1) {
        const decimalStr = decimal.length > 0 ? `.${(decimal.join(''))}` : ''
        return `${isNagative ? '-' : ''}${parseInt(integer.join(''))}${decimalStr}`
      } else {
        return `${isNagative ? '-' : ''}${parseInt(integer.join(''))}.${ans.slice(dot+1, reFirstIndex).join('')}(${ans.slice(reFirstIndex).join('')})`
      }
    } else {
      return `${isNagative ? '-' : ''}${parseInt(integer.join(''))}`
    }
};

console.log('fractionToDecimal(1, 6)', fractionToDecimal(1, 6));
console.log('fractionToDecimal(4, 333)', fractionToDecimal(4, 333));
console.log('fractionToDecimal(25, 435)', fractionToDecimal(25, 435));
console.log('fractionToDecimal(17, 2)', fractionToDecimal(17, 2));
console.log('fractionToDecimal(2, 1)', fractionToDecimal(2, 1));
console.log('fractionToDecimal(0, 3)', fractionToDecimal(0, 3))
console.log('fractionToDecimal(500, 10)', fractionToDecimal(500, 10))
console.log('fractionToDecimal(5000, 10)', fractionToDecimal(5000, 10))
console.log('fractionToDecimal(50, 8)', fractionToDecimal(50, 8))
console.log('fractionToDecimal(-50, 8)', fractionToDecimal(-50, 8))
console.log('fractionToDecimal(2, 3)', fractionToDecimal(2, 3));
console.log('fractionToDecimal(7, 12)', fractionToDecimal(7, 12));
console.log('fractionToDecimal(7, -12)', fractionToDecimal(7, -12));
console.log('fractionToDecimal(-7, -12)', fractionToDecimal(-7, -12));
console.log('fractionToDecimal(2147483647, 37)', fractionToDecimal(2147483647, 37))
