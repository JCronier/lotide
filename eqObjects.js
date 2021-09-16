const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    return;
  }

  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  
};

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
  }
  return true;
};

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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false