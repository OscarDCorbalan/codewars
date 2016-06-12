const letters = [...'abcdefghijklmnopqrstuvwxyz'];

function isLetter(letter){
  return letters.indexOf(letter) >= 0;
}

function getCount(words) {
  if(!words || typeof words !== 'string'){
    return {
      vowels: 0,
      consonants: 0
    }
  }
  
  words = words.toLowerCase();
  console.log(words);
  const wordChars = words.split('');
  
  // Count the repetitions
  const counts = {};
  letters.forEach(char => counts[char] = 0);
  wordChars.forEach(char => counts[char]++);
  
  var numLetters = 0;
  var numVowels = 0;
  letters.forEach(vowel => numLetters += counts[vowel]);  
  [...'aeiou'].forEach(vowel => numVowels += counts[vowel]);  
  
  return {
    vowels: numVowels,
    consonants: numLetters - numVowels
  };
}
