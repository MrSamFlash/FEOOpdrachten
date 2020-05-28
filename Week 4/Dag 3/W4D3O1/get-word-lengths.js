const getWordLengths = function (someWords) {
  let someWordsLength = someWords.map((w) => w.length);
  return someWordsLength;
};

module.exports = getWordLengths;
