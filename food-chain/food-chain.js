const FoodChain = class {
  constructor() {
  }
}

FoodChain.prototype.parts = [
    {
      critter: 'fly',
      descriptor: 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'
    },
    {
      critter: 'spider',
      critterLong: 'spider that wriggled and jiggled and tickled inside her',
      descriptor: 'It wriggled and jiggled and tickled inside her.\n'
    },
    {
      critter: 'bird',
      descriptor: 'How absurd to swallow a bird!\n'
    },
    {
      critter: 'cat',
      descriptor: 'Imagine that, to swallow a cat!\n'
    },
    {
      critter: 'dog',
      descriptor: 'What a hog, to swallow a dog!\n'
    },
    {
      critter: 'goat',
      descriptor: 'Just opened her throat and swallowed a goat!\n'
    },
    {
      critter: 'cow',
      descriptor: 'I don\'t know how she swallowed a cow!\n'
    },
    {
      critter: 'horse',
      descriptor: 'She\'s dead, of course!\n'
    }
]

FoodChain.prototype.verse = function(verseNum, numVerses) {
  const parts = this.parts;
  let first = `I know an old lady who swallowed a ${parts[verseNum-1].critter}.\n${parts[verseNum-1].descriptor}`;
  let song = first;

  if(verseNum === 8) {
    return song;
  }
  if(verseNum > 1) { // add verses
    while ( verseNum > 1) {
      let verse = `She swallowed the ${parts[verseNum-1].critter} to catch the ${parts[verseNum-2].critterLong ? parts[verseNum-2].critterLong : parts[verseNum-2].critter}.\n`

      song += verse;
      verseNum--;
    }
    song += parts[0].descriptor;
  }
  return song;
}

FoodChain.prototype.verses = function(start, numVerses) {
 let song = '';
  while(start <= numVerses) {
    song += this.verse(start) + '\n';
    start++;
  }
  return song;
}

module.exports = FoodChain;
