/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  const binaryYear = numberToBinary((year));
  const binaryMonth = numberToBinary((month));
  const binaryDate =  month === day ? binaryMonth : numberToBinary((day));
  return `${binaryYear.join("")}-${binaryMonth.join("")}-${binaryDate.join(
    ""
  )}`;
};

const numberToBinary = (n) => {
  const arr = [];
  while (n !== 0) {
    const x = n % 2;
    arr.unshift(x);
    n = Math.floor(n / 2);
  }
  return arr;
};

console.log(convertDateToBinary("2080-02-29"));
console.log(convertDateToBinary("1900-01-01"));
