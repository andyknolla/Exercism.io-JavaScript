const Song = function() {
};
Song.prototype.lastBottle = 'no more bottles of beer on the wall.'
Song.prototype.zeroBottles = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
Song.prototype.verse = function(start) {
  if(start === 0) {
    return this.zeroBottles;
  }

  let count = start;
  const allButLast = `${count-1} ${count>2 ? 'bottles' : 'bottle'} of beer on the wall.\n`;

  let output = `${count} ${count>1 ? 'bottles' : 'bottle'} of beer on the wall, ${count} ${count>1 ? 'bottles' : 'bottle'} of beer.\nTake ${start === 1 ? 'it' : 'one'} down and pass it around, `
  if(start === 1) {
    output = output + this.lastBottle + '\n';
  } else {
    output = output + `${count-1} ${count>2 ? 'bottles' : 'bottle'} of beer on the wall.\n`;
  }
  return output;
  //
  // for(count;count >= end;count--) {
  //   output = output + `${count} ${count>1 ? 'bottles' : 'bottle'} of beer on the wall, ${count} ${count>1 ? 'bottles' : 'bottle'} of beer.\nTake ${count === 1 ? 'it' : 'one'} down and pass it around, ${count>2 ? this.allButLast : this.lastBottle}`;
  // }
}

Song.prototype.sing = function(start, end = 0) {
  let count = start;

  let output = '';

  for(count;count >= end;count--) {
    const allButLast = `${count-1} ${count>2 ? 'bottles' : 'bottle'} of beer on the wall.${count > end ? '\n' :''}`;

    output = output + `${count} ${count===1 ? 'bottle' : 'bottles'} of beer on the wall, ${count} ${count===1 ? 'bottle' : 'bottles'} of beer.\nTake ${count === 1 ? 'it' : 'one'} down and pass it around, ${count>0 ? allButLast : this.lastBottle}\n`;
  }
  if(count > 0) return output;
  else return output + '\n' + this.zeroBottles;
}

module.exports = Song;
