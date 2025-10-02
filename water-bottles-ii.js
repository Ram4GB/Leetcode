/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function (numBottles, numExchange) {
  let emptyBottles = 0;
  let ans = 0;

  const isAbleToExchange = () => {
    return emptyBottles - numExchange >= 0;
  };

  const isAbleToDrink = () => {
    return numBottles > 0;
  };

  while (isAbleToDrink() || isAbleToExchange()) {
    // Exchange the empty bottles with the full bottles
    while (isAbleToExchange()) {
      numBottles++;
      emptyBottles = emptyBottles - numExchange;
      numExchange++;
    }
    // if we can drink, we drink all number of bottles
    ans = ans + numBottles;
    // after we drink the full bottles, it becomes an emty bottle
    emptyBottles = emptyBottles + numBottles;
    // drink all full bottles.
    numBottles = 0;
  }

  return ans;
};

console.log(maxBottlesDrunk(13, 6))
console.log(maxBottlesDrunk(10, 3))
console.log(maxBottlesDrunk(1, 2))