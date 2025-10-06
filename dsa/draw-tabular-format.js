/**
 * @param {number[]} arr
 * @param {number} k
 */
const drawTabularFormat = (arr, k) => {
  // Find the maximum number of the table
  let majorNum = Math.max(...arr);
  const widthLen = String(majorNum).length;

  const drawBottomLine = (k) => {
    let s = "";
    for (let i = 0; i < k; i++) {
      s = s + "+" + String("-").repeat(widthLen);
    }
    s = s + "+";
    s = s + "\n";
    return s;
  };

  // Draw the table
  let str = drawBottomLine(k);
  for (let i = 0; i < arr.length; i++) {
    const cell = "|" + String(arr[i]).padStart(widthLen, " ");
    str = str + cell;
    // the last cell of the row or the last item of an array
    if ((i + 1) % k === 0 || i === arr.length - 1) {
      str = str + "|";
      str = str + "\n";
      if (i === arr.length - 1) {
        const mod = arr.length % k;
        str = str + drawBottomLine(mod === 0 ? k : mod);
      } else {
        str = str + drawBottomLine(k);
      }
    }
  }
  return str;
};

console.log(drawTabularFormat([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3, 22, 35], 4));
console.log(drawTabularFormat([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3, 22, 35], 3));
console.log(drawTabularFormat([4, 1, 2, 3, 4, 5, 8, 5, 1, 3, 1, 2], 3));
console.log(drawTabularFormat([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3], 4));
console.log(drawTabularFormat([4, 450000, 80, 6000, 1000000000, 44, 8, 5, 1240, 3], 4));
console.log(drawTabularFormat([4, 450000, 80, 6000, 1000000000, 44, 8, 5, 1240, 3], 6));
