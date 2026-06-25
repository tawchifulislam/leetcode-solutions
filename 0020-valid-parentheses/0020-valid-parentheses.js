/**
 * @param {string} s
 * @return {boolean}
 */
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
