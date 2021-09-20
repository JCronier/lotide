// map.js

const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const words = ["sound", "control", "to", "major", "tom"];
// const numbers = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144];
// const bools = [true, false, false, true, false];

// const results1 = map(words, word => word.length);
// const results2 = map(numbers, number => Math.sqrt(number));
// const results3 = map(bools, bool => !bool);


// assertArraysEqual(results1, [5, 7, 2, 5, 3]);
// assertArraysEqual(results2, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
// assertArraysEqual(results3, [false, true, true, false, true]);

module.exports = map;