/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let prevPoison = [-1,-1];
    let res = 0;
    for (let i = 0 ; i < timeSeries.length; i++) {
      const curPoison = [timeSeries[i], timeSeries[i] + duration - 1];
      if (prevPoison[1] >= curPoison[0]) {
        const startEffect = prevPoison[1] + 1;
        const totalEffectTime = curPoison[1] - startEffect + 1;
        res = res + Math.max(0, totalEffectTime)
      } else {
        const totalEffectTime = curPoison[1] - curPoison[0] + 1;
        res = res + totalEffectTime;
      }
        prevPoison = curPoison;
    }

    return res;
};

console.log(findPoisonedDuration([1,4], 2)); // 4
console.log(findPoisonedDuration([1,2], 2)); // 3
console.log(findPoisonedDuration([1,5], 2)); // 4
console.log(findPoisonedDuration([1,2], 4)); // 5
console.log(findPoisonedDuration([0,1], 2)); // 3
console.log(findPoisonedDuration([0,1], 1)); // 2