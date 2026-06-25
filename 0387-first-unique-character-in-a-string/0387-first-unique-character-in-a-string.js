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
