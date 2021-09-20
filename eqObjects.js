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

  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      continue;
    } else if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
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

const cd2 = { c: "1", 3: {2: "3", 4: 3, 6: 4} };

const cd3 = { c: "1", 3: {2: "3", 4: 3, 6: 4} };

assertEqual(eqObjects(cd2, cd3), true);

const test1 = { c: "1", 3: {2: "3", 4: { c: "1", 3: {2: "3", 4: { c: "1", 3: {2: "3", 4: 3, 6: 4} }, 6: 4} }, 6: 4} };
const test2 = { c: "1", 3: {2: "3", 5: { c: "1", 3: {2: "3", 4: { c: "1", 3: {2: "3", 4: 3, 6: 4} }, 6: 4} }, 6: 4} };
assertEqual(eqObjects(test1, test2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false