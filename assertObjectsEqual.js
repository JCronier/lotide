const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {

    return false;
  }

  for (const key of Object.keys(object1)) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

      if (eqArrays(object1[key], object2[key])) {
        continue;
      }
      return false;
    }

    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return;
  }

  console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

assertObjectsEqual({a: "1", b: "3"}, {a: "1", c: "3"});