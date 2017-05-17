const Word = function(input) {
  this.input = input;
}

Word.prototype.isIsogram = function() {
  const word = this.input.toLowerCase().replace(/[\-\s]/g, '');
  for (let i = 1; i < word.length; i++) {
    if( word.substr(i).includes(word[i-1] ) ) {
      return false;
    }
  }
  return true;
}

module.exports = Word;
