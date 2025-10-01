/**
 * @param {string} s
 */
const checkIfABeforeB = (S) => {
    let mid = S.length / 2;
    let i = 0;
    let j = S.length - 1;
    let flag = true;
    while (i < mid && j > mid) {
        if (S[i] > S[i + 1] || S[j] < S[j - 1] || S[mid - 1] > S[mid] || S[mid] > S[mid + 1]) {
            flag = false;
            return flag;
        }

        i = i + i;
        j = j - 1;
    }

    return flag;
};

console.log(`checkIfABeforeB('aabbb')`, checkIfABeforeB("aabbb"));
console.log(`checkIfABeforeB('ba')`, checkIfABeforeB("ba"));
console.log(`checkIfABeforeB('aaa')`, checkIfABeforeB("aaa"));
console.log(`checkIfABeforeB('b')`, checkIfABeforeB("b"));
console.log(`checkIfABeforeB('abba')`, checkIfABeforeB("abba"));
console.log(`checkIfABeforeB('bbaa')`, checkIfABeforeB("bbaa"));
console.log(`checkIfABeforeB('aaaaaaaaab')`, checkIfABeforeB("aaaaaaaaab"));
console.log(`checkIfABeforeB('aaaaaaaaabab')`, checkIfABeforeB("aaaaaaaaabab"));
