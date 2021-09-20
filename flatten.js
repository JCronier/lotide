// flatten.js

const flatten = function(nestedArrays) {
  let result = [];
  for (let element of nestedArrays) {
    if (Array.isArray(element)) {
      for (let nestedElement of element) {
        result.push(nestedElement);
      }
    } else {
      result.push(element);
    }
  }
  return result;
};

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6], 7]),[1, 2, 3, 4, 5, 6]);

module.exports = flatten;