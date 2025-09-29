/**
 * @param {string} s
 */
const lettersDeletion = (s) => {
    // A - B - N
    let a = 0;
    let b = 0;
    let n = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "A") {
            a++;
        } else if (s[i] === "B") {
            b++;
        } else if (s[i] === "N") {
            n++;
        }
    }
    let c = 0;
    while (a >= 3 && b >= 1 && n >= 2) {
        c++;
        a -= 3;
        b -= 1;
        n -= 2;
    }
    return c;
};

console.log("lettersDeletion", lettersDeletion("NAABXXAN"));
console.log("lettersDeletion", lettersDeletion("NAANAAXNABABYNNBZ"));
console.log("lettersDeletion", lettersDeletion("QABAAAWOBL"));
console.log("lettersDeletion", lettersDeletion("AAAAAAAAAANNNNNNBBB"));
console.log("lettersDeletion", lettersDeletion(""));
