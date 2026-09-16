/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function(n, k) {
    const MOD = 1000000007n;
    const N = BigInt(n + k - 1);
    const K = BigInt(2 * k);

    if (N < K) return 0;

    function modPow(base, exp) {
        let result = 1n;
        base = base % MOD;
        while (exp > 0n) {
            if (exp % 2n === 1n) result = (result * base) % MOD;
            base = (base * base) % MOD;
            exp = exp / 2n;
        }
        return result;
    }

    function modInverse(a) {
        return modPow(a, MOD - 2n);
    }

    let num = 1n;
    let den = 1n;

    for (let i = 0n; i < K; i++) {
        num = (num * (N - i)) % MOD;
        den = (den * (i + 1n)) % MOD;
    }

    return Number((num * modInverse(den)) % MOD);
};