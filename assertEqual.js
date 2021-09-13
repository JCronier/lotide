const assertEqual = function(actual, expected) {
  let arrayStatus = false;
  if (Array.isArray(actual) && Array.isArray(expected) && actual.length === expected.length) {
    arrayStatus = actual.every((element, index) => element === expected[index]);
  }

  if (actual === expected || arrayStatus) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);