const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    return;
  }

  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};


// Test cases
const ab = { a: "1", b: "2" , c: "2"};
const ba = { b: "2", a: "1" , c: "2"};
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const abcd = { a: "1", b: "2", c: "3", d: 4 };
assertEqual(eqObjects(ab, abcd), false);

const abcde = {a: "1", b: "2", c: "3", d: "4"};
assertEqual(eqObjects(abcd, abcde), false);

assertEqual(eqObjects({}, {}), true);

assertEqual(eqObjects({}, {a: "1"}), false);