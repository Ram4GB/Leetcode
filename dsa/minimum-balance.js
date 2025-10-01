/**
 * @param {string} r
 * @param {number[]} v
 */
// const minimumBalance = (r, v) => {
//     let found = false;
//     let initialBankA = 0;
//     let initialBankB = 0;

//     while (!found) {
//         let bankA = initialBankA;
//         let bankB = initialBankB;
//         let flag = true;
//         for (let i = 0; i < r.length; i++) {
//             if (r[i] === "A") {
//                 bankB -= v[i];
//                 bankA += v[i];
//             } else {
//                 bankA -= v[i];
//                 bankB += v[i];
//             }
//             if (bankA < 0) {
//                 initialBankA++;
//                 flag = false;
//                 break;
//             }
//             if (bankB < 0) {
//                 initialBankB++;
//                 flag = false;
//                 break;
//             }
//         }
//         found = flag;
//     }

//     return [initialBankA, initialBankB];
// };

const minimumBalance = (r, v) => {
    let found = false;
    let initialBankA = 0;
    let initialBankB = 0;

    while (!found) {
        let bankA = initialBankA;
        let bankB = initialBankB;
        let flag = true;
        for (let i = 0; i < r.length; i++) {
            if (r[i] === "A") {
                bankB -= v[i];
                bankA += v[i];
            } else {
                bankA -= v[i];
                bankB += v[i];
            }
            if (bankA < 0) {
                initialBankA = initialBankA + -bankA;
                bankA=0;
                flag = false;
                break;
            }
            if (bankB < 0) {
                initialBankB = initialBankB + -bankB;
                bankB=0;
                flag = false;m 
                break;
            }
        }
        found = flag;
    }

    return [initialBankA, initialBankB];
};

console.log("minimumBalance", minimumBalance("BAABA", [2, 4, 1, 1, 2]));
console.log("minimumBalance", minimumBalance("ABAB", [10, 5, 10, 15]));
console.log("minimumBalance", minimumBalance("BAABAA", [2, 4, 1, 1, 2, 3]));
console.log("minimumBalance", minimumBalance("BBAABAA", [2, 4, 8, 1, 1, 2, 3]));
console.log(minimumBalance("ABAB", [5, 10, 3, 2]));
console.log(minimumBalance("A", [5]));
console.log(minimumBalance("B", [5]));
console.log(minimumBalance("BBB", [2, 4, 2]));
