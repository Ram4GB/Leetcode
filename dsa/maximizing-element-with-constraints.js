function maxElement(n, maxSum, k) {
    let max = -1;
    const backtracking = (arr) => {
        if (arr.length === n) {
            let sum = arr.reduce((prev, cur) => {
                return prev + cur;
            }, 0);
            if (sum <= maxSum && arr[k] > max) {
                max = arr[k];
            }
            return;
        }

        if (!arr.length) {
            for (let i = 1; i <= n; i++) {
                arr.push(i);
                backtracking(arr);
                arr.pop();
            }
        } else {
            const firstItem = arr[0];
            for (let j = 0; j <= 1; j++) {
                arr.push(firstItem + j);
                backtracking(arr);
                arr.pop();
            }
        }
    };
    backtracking([]);
    return max;
}

// console.log(maxElement(3, 6, 1));
// console.log(maxElement(3, 7, 1));
// console.log(maxElement(4, 6, 2));
console.log(maxElement(90, 123, 2));
// console.log(maxElement(100, 100, 2));
