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

// LeetCode 21. Merge Two Sorted Lists
let mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let current = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  if (list1) {
    current.next = list1;
  }
  if (list2) {
    current.next = list2;
  }
  return dummy.next;
};

// LeetCode 26. Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

// LeetCode 27. Remove Element
var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

// LeetCode 35. Search Insert Position
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

// LeetCode 58. Length of Last Word
var lengthOfLastWord = function (s) {
  s = s.trim();
  let words = s.split(' ');
  return words[words.length - 1].length;
};

// LeetCode 66. Plus One
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

// LeetCode 67. Add Binary
var addBinary = function (a, b) {
  let carry = 0;
  let result = '';
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;
    if (i >= 0) sum += a[i--] - '0';
    if (j >= 0) sum += b[j--] - '0';
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }
  return result;
};

// LeetCode 70. Climbing Stairs
var climbStairs = function (n) {
  if (n <= 2) return n;
  let a = 1,
    b = 2;
  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

// LeetCode 14. Longest Common Prefix
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === '') return '';
    }
  }

  return prefix;
};

// LeetCode 9. Palindrome Number
var isPalindrome = function (x) {
  if (x < 0) return false;
  let str = x.toString();
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
};
