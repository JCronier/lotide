// findKeyByValue.js

const findKeyByValue = function(object, findValue) {
  return Object.keys(object).find(key => {
    if (object[key] === findValue) {
      return key;
    }
  });
};

// TEST CODE

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;