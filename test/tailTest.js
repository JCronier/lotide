// test/tailTest.js

const assertArraysEqual = require("../assertArraysEqual");
const tail = require("../tail");

// TEST CODE

assertArraysEqual(tail(["H", "e", "l", "l", "o"]), ["e", "l", "l", "o"]);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs", "Rocks"]), ["Lighthouse", "Labs", "Rocks"]);