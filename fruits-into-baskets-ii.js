/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  let i = 0;
  let count = 0;
  while (i < fruits.length) {
    for (let j = 0; j < baskets.length; j++) {
      if (fruits[i] <= baskets[j]) {
        count++;
        baskets.splice(j, 1);
        break;
      }
    }
    i++;
  }
  return fruits.length - count;
};

console.log("numOfUnplacedFruits", numOfUnplacedFruits([4, 2, 5], [3, 5, 4]));
