/**
 * @param {number[]} arr
 */
const passingCars = (arr) => {
  let eastCars = 0;
  let westCars = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      eastCars++;
    } else {
      westCars++;
    }
  }

  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      ans = ans + westCars;
      eastCars--;
      if (eastCars === 0) break;
    } else {
      westCars--;
    }
  }

  return ans;
};

console.log(passingCars([0, 1, 0, 1, 1]));
console.log(passingCars([0, 1, 0, 1, 0, 1]));
console.log(passingCars([0, 0, 0, 0, 0]));
console.log(passingCars([1, 1, 1, 1, 1]));
console.log(passingCars([1, 1, 0, 1, 1]));
console.log(passingCars([0, 0, 1, 0, 0]));
console.log(passingCars([1, 0, 1, 0, 1]));
console.log(passingCars([0, 1, 1, 1]));
