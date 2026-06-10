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
