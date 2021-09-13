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

const tail = function(array) {
  return array.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs", "Rocks"]);

