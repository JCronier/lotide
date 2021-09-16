const takeUntil = function(array, callback) {
  let results = [];

  for (const element of array) {
    results.push(element);
    if (callback(element)) {
      break;
    }
  }

  return results;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    return;
  }

  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }

  return true;
};



/* #region  Test Code */
const data1 = [1, 2, 5, 7, 2, 1, 2, 4, 5];
const results1 = takeUntil(data1, x => x > 5);
assertArraysEqual(results1, [1, 2, 5, 7]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood', ',' ]);
/* #endregion */