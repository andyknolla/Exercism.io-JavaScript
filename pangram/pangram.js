const Pangram = function(input) {
  this.input = input
};

Pangram.prototype.isPangram = function() {
  const abcs = 'abcdefghijklmnopqrstuvwxyz'.split('');

  if(!this.input) return false;

  const sentLetters = this.input.toLowerCase().trim().replace(' ', '').split('');

  return abcs.every( (letter) => {
    return sentLetters.includes(letter)
  })
}

module.exports = Pangram;
