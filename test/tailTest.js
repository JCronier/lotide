// test/tailTest.js

const assertArraysEqual = require("../assertArraysEqual");
const tail = require("../tail");

// TEST CODE

assertArraysEqual(tail(["Hello"]), ["ello"]);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs", "Rocks"]), ["Lighthouse", "Labs", "Rocks"]);