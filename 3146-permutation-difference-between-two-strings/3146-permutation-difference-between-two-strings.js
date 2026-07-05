/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let indexMap = new Map();

    for (let i = 0; i < s.length; i++) {
        indexMap.set(s[i], i);
    }

    let totalDiff = 0;

    for (let j = 0; j < t.length; j++) {
        totalDiff += Math.abs(indexMap.get(t[j]) - j);
    }

    return totalDiff;
};
