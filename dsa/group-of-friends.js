/**
 * @param {number[]} p
 * @param {number[]} s
 */
const groupOfFriends = (p, s) => {
  const totalSeat = p.reduce((prev, cur) => {
    return prev + cur;
  }, 0);

  const possibleCases = [];
  const availability = Array.from({ length: p.length }).fill(false);
  backtracking(s, 0, 0, [], totalSeat, availability, possibleCases);
  let min = possibleCases[0].length;
  for (let i = 0 ; i < possibleCases.length; i++) {
    if (possibleCases[i].length < min) {
      min = possibleCases[i].length;
    }
  }
  return min;
};

const backtracking = (s, from, sum, arr, target, availability, possibleCases) => {
  if (arr.length > s.length) return;

  if (sum >= target) {
    return possibleCases.push(Array.from(arr));
  }

  for (let i = from ; i < s.length; i++) {
    if (availability[i]) continue;
    availability[i] = true;
    arr.push(s[i]);
    sum += s[i];
    backtracking(s, i + 1, sum, arr, target, availability, possibleCases);
    availability[i] = false;
    arr.pop()
    sum -= s[i];
  }
};

console.log(groupOfFriends([1, 4, 1], [1, 5, 1]));
console.log(groupOfFriends([4,4,2,4], [5,5,2,5]));
console.log(groupOfFriends([2,3,4,2], [2,5,7,2]))