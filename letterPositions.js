// letterPositions.js

const letterPositions = function(sentence) {
  // let positions = {};

  // for (const [index, element] of sentence.split("").entries()) {

  //   if (!positions[element]) {
  //     positions[element] = [];
  //   }

  //   positions[element].push(index);
  // }

  // New way without for loop
  sentence.split("").forEach((key, index) => {
    if (!positions[key]) {
      positions[key] = [];
    }

    positions[key].push(index);
  });

  delete positions[" "];
  return positions;
};

// const verifyPositions = {
//   l: [ 0 ],
//   i: [ 1, 11 ],
//   g: [ 2 ],
//   h: [ 3, 5, 15, 18 ],
//   t: [ 4, 14 ],
//   o: [ 6, 19 ],
//   u: [ 7, 20 ],
//   s: [ 8, 21 ],
//   e: [ 9, 16, 22 ],
//   n: [ 12 ]

// };

// const helloPos = {
//   h: [0],
//   e: [1],
//   l: [2, 3],
//   o: [4]
// };

// let positions = letterPositions("lighthouse in the house");

// assertEqual(Object.keys(positions).length, Object.keys(verifyPositions).length);
// for (const key in positions) {
//   assertArraysEqual(positions[key], verifyPositions[key]);
// }

// positions = letterPositions("hello");

// assertEqual(Object.keys(positions).length, Object.keys(helloPos).length);
// for (const key in positions) {
//   assertArraysEqual(positions[key], helloPos[key]);
// }

module.exports = letterPositions;