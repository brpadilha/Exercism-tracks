//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (nucleotide) => {
  const translateNucleotide = {
    'C': 'G',
    'G': 'C',
    'T': 'A',
    'A': 'U'
  }

  const rna = nucleotide.split('').reduce((rna, letter) => {

    
    return rna = rna + translateNucleotide[letter]
  },'')

  return rna
};
