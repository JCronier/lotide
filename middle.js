// middle.js

const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1);
  } else {
    return array.slice(Math.floor(array.length / 2), Math.ceil(array.length / 2));
  }
};

module.exports = middle;