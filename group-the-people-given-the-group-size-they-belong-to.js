/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const groupedMap = new Map();

  let maxGroupSize = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < groupSizes.length; i++) {
    if (maxGroupSize < groupSizes[i]) maxGroupSize = groupSizes[i];
    if (groupedMap.has(groupSizes[i])) {
      groupedMap.get(groupSizes[i]).push(i);
    } else {
      groupedMap.set(groupSizes[i], [i]);
    }
  }

  const res = [];
  for (let i = 1; i <= maxGroupSize; i++) {
    const currentGrouped = groupedMap.get(i);
    if (!currentGrouped) continue;
    let arr = [];
    let c = 0;
    for (let j = 0; j < currentGrouped.length; j++) {
      arr.push(currentGrouped[j]);
      c++;
      if (c === i) {
        res.push(arr);
        c = 0;
        arr = [];
      }
    }
  }

  return res;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
console.log(groupThePeople([1]));
