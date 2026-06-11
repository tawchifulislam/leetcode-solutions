// LeetCode 2114. Maximum Number of Words Found in Sentences

const mostWordsFound = sentences => {
  let max = 0;
  for (let i = 0; i < sentences.length; i++) {
    let currentSentence = sentences[i];
    let wordsArray = currentSentence.split(' ');
    let currentWordCount = wordsArray.length;
    if (currentWordCount > max) {
      max = currentWordCount;
    }
  }
  return max;
};

// LeetCode 387. First Unique Character in a String

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let charCount = {};

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (charCount[currentChar]) {
      charCount[currentChar] += 1;
    } else {
      charCount[currentChar] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (charCount[currentChar] === 1) {
      return i;
    }
  }

  return -1;
};

// LeetCode 13. Roman to Integer

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
      i++;
    } else {
      total += currentValue;
    }
  }
  return total;
};

// LeetCode 20. Valid Parentheses
var isValid = function (s) {
  let stack = [];
  let pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (pairs[currentChar]) {
      stack.push(currentChar);
    } else {
      let lastChar = stack.pop();
      if (currentChar !== pairs[lastChar]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
