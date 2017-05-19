const Anagram = class {
  constructor(word) {
    this.word = word;
  }
}

Anagram.prototype.sort = function(word) {
  return word.toLowerCase().trim().split('').sort().join('');
}

Anagram.prototype.matches = function(wordOrWords, ...moreWords) {
let wordsArray, noDupes;
  if(typeof(wordOrWords) === 'string') {
    if(arguments.length > 1) {
      wordsArray = [...moreWords, wordOrWords];
    } else {
      return Array(wordOrWords);
    }
  }
  noDupes = (wordsArray ? wordsArray : wordOrWords).filter( (word) => {
    return word.toLowerCase() != this.word.toLowerCase();
  });

  const sortedLetters = this.sort(this.word);
  return noDupes.filter((word) => {
    return sortedLetters === this.sort(word);
  })
}

module.exports = Anagram;
