const letters = [...'abcdefghijklmnopqrstuvwxyz'];

function isLetter(letter){
  return letters.indexOf(letter) >= 0;
}

function getCount(words) {
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

function intersection(set1, set2){
  return new Set([...set1].filter(x => set2.has(x)));
}