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