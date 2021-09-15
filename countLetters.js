const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  let letterCounts = {};

  for (const letter of sentence.split(" ").join("")) {

    if (!letterCounts[letter]) 
      letterCounts[letter] = 0;
    
    letterCounts[letter]++;
  }

  return letterCounts;
};

const verifyCounts = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

const sentence = "lighthouse in the house";

const letterCounts = countLetters(sentence);
console.log(letterCounts);

assertEqual(Object.keys(letterCounts).length, Object.keys(verifyCounts).length);
for (const key in verifyCounts) {
  assertEqual(letterCounts[key], verifyCounts[key]);
}
