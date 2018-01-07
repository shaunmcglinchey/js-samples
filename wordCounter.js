function countWords(inputWords) {
  return inputWords.reduce(function (countMap, word) {
    countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
    // if (word in allWords) {
    //   allWords[word]++;
    // }
    // else {
    //   allWords[word] = 1;
    // }
    return countMap;
  }, {});
   }

   module.exports = countWords
