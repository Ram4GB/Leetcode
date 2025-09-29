/**
 * @param {string} aa
 * @param {string} ab
 * @param {string} bb
 */
const joinString = (aa, ab, bb) => {
  const res = [];
  backtracking(aa, ab, bb, [], res);

  if (!res.length) return -1;

  const map = new Map();
  for (let i = 0; i < res.length; i++) {
    if (!map.has(res[i].length)) {
      map.set(res[i].length, [res[i]]);
    } else {
      map.get(res[i].length).push(res[i]);
    }
  }

  const max = Math.max(...Array.from(map.keys()));

  return map.get(max).map(it => it.join('')).join(' ');
};

const backtracking = (aa, ab, bb, arr, res) => {
  if (
    (arr[arr.length - 1] === "AA" && bb === 0) ||
    (arr[arr.length - 1] === "AB" && ab === 0 && aa === 0) ||
    (arr[arr.length - 1] === bb && aa === 0 && ab === 0)
  ) {
    return res.push(Array.from(arr));
  }

  if (arr[arr.length - 1] === "AB" || arr.length === 0) {
    if (aa > 0) {
      arr.push("AA");
      aa--;
      backtracking(aa, ab, bb, arr, res);
      arr.pop();
      aa++;
    }
    if (ab > 0) {
      arr.push("AB");
      ab--;
      backtracking(aa, ab, bb, arr, res);
      arr.pop();
      ab++;
    }
  }

  if ((arr[arr.length - 1] === "AA" || arr.length === 0) && bb > 0) {
    arr.push("BB");
    bb--;
    backtracking(aa, ab, bb, arr, res);
    arr.pop();
    bb++;
  }

  if (arr[arr.length - 1] === "BB" || arr.length === 0) {
    if (aa > 0 && arr.length > 0) {
      arr.push("AA");
      aa--;
      backtracking(aa, ab, bb, arr, res);
      arr.pop();
      aa++;
    }
    //  ---
    if (ab > 0 && arr.length > 0) {
      arr.push("AB");
      ab--;
      backtracking(aa, ab, bb, arr, res);
      arr.pop();
      ab++;
    }
  }
};

console.log(joinString(5, 0, 2));
console.log(joinString(1, 2, 1));
console.log(joinString(0, 2, 0));
console.log(joinString(0, 0, 10));
