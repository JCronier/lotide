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

module.exports = flatten;