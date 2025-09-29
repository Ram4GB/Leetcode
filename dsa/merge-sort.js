/**
 * @param {number[]} arr
 */
const mergeSort = (arr) => {
    if (arr.length === 1) return arr;
    // divide
    const mid = Math.floor((arr.length - 1) / 2) + 1;
    console.log('mergeSort', mid, arr.slice(0, mid), arr.slice(mid));
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    // merge
    let i = 0;
    let j = 0;
    const res = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        res.push(left[i]);
        i++;
    }
    while (j < right.length) {
        res.push(right[j]);
        j++;
    }
    return res;
};

// 3 2 4 1
// 3 2 - 4 1
// 2 - 3 - 1 - 4
// 1 2 3 4

console.log(mergeSort([3, 2, 4, 1]));
