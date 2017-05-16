const Bob = function(input) {
  this.input = input
};

Bob.prototype.hey = function(input) {
  if( !input.trim() ) {
    return 'Fine. Be that way!';
  } else if(
      input === input.toUpperCase() &&
      input === input.toLowerCase() &&
      !input.endsWith('?') ) {
        return 'Whatever.';
  } else if(
      input === input.toUpperCase() &&
      input === input.toLowerCase() &&
      input.endsWith('?') ) {
        return 'Sure.';
  } else if( input === input.toUpperCase() ) {
      return 'Whoa, chill out!';
  } else if( input === input.toUpperCase() &&
      input === input.toLowerCase() &&
      input.endsWith('?') ) {
      return 'Sure.';
  } else if( input.endsWith('?') ) {
      return 'Sure.';
  } else return 'Whatever.';
}

module.exports = Bob;
