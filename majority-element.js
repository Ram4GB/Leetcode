/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    /**
     * @param {Map} mapA
     * @param {Map} mapB
     */
    const merge = (mapA, mapB) => {
      mapB.forEach((times, num) => {
        if (mapA.has(num)) {
          mapA.set(num, mapA.get(num) + times)
        } else {
          mapA.set(num, times);
        }
      })
      return mapA;
    };

    const divideAndConquer = (nums) => {
        if (nums.length === 0) return new Map();
        if (nums.length === 1) return new Map([[nums[0], 1]]);
        // divide
        const mid = Math.floor(nums.length / 2);
        const left = divideAndConquer(nums.slice(0, mid));
        const right = divideAndConquer(nums.slice(mid));
        // resolve -> merge 
        const group = merge(left, right);
        return group;
    };

    const groups = Array.from(divideAndConquer(nums));
    let max = groups[0][1];
    let num = groups[0][0];
    for (let i = 1; i < groups.length; i++) {
      if (max < groups[i][1]) {
        num = groups[i][0]
        max = groups[i][1];
      }
    }
    return num;
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([1,1,1,1,1,1,1]))
console.log(majorityElement([1,1,1,1,1,1,1]))