Test.describe("Fixed Tests", _ => {
  Test.it("Happy Tests", __ => {
    Test.assertSimilar(getCount('Test'),{vowels:1,consonants:3},'Should return 1 vowel and 3 consonants');
    Test.assertSimilar(getCount('Here is some text'),{vowels:6,consonants:8},'Should return 6 vowel and 8 consonants');
    Test.assertSimilar(getCount('To be a Codewarrior or not to be'),{vowels:12,consonants:13},'Should return 12 vowel and 13 consonants');
    Test.assertSimilar(getCount('To Kata or not to Kata'),{vowels:8,consonants:9},'Should return 8 vowel and 9 consonants');
    Test.assertSimilar(getCount('aeiou'),{vowels:5,consonants:0},'Should return 5 vowel and 0 consonants');
  });
  
  Test.it("Unhappy Tests", __ => {
    Test.assertSimilar(getCount('TEst'),{vowels:1,consonants:3},'Should return 1 vowel and 3 consonants');
    Test.assertSimilar(getCount('HEre Is sOme text   '),{vowels:6,consonants:8},'Should return 6 vowel and 8 consonants');
    Test.assertSimilar(getCount(),{vowels:0,consonants:0},'Should return 0 vowel and 0 consonants');
    Test.assertSimilar(getCount(['To Kata or not to Kata']),{vowels:0,consonants:0},'Should return 0 vowel and 0 consonants');
    Test.assertSimilar(getCount(undefined),{vowels:0,consonants:0},'Should return 0 vowel and 0 consonants');
  });
});  