const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    return;
  }

  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  
};

const findKeyByValue = function(object, findValue) {

  for (const [key, value] of Object.entries(object)) {
    
    if (value === findValue) {
      return key;
    }
  }

  // return Object.keys(object).find(key => { if (object[key] === findValue) return key; });
                                
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);