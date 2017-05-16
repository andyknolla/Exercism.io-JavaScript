const DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {

  let rna = '';
  for(let i=0;i<dna.length;i++) {
    switch(dna.split('')[i]) {
      case 'G': rna = rna + 'C';
      break;

      case 'C': rna = rna + 'G';
      break;

      case 'T': rna = rna + 'A';
      break;

      case 'A': rna = rna + 'U';
      break

      default: throw new Error('Invalid input')
    }
  }
return rna;
}

module.exports = DnaTranscriber;
