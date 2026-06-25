const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let currentSymbol = s[i];
    let currentValue = symbols[currentSymbol];
    let nextSymbol = s[i + 1];
    let nextValue = symbols[nextSymbol];

    if (currentValue < nextValue) {
      total += nextValue - currentValue;
      i++; // Skip the next symbol since it's already been processed
    } else {
      total += currentValue;
    }
  }
  return total;
};
