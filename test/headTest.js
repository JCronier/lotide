// test/headTest.js

const assertEqual = require("../assertEqual");
const head = require("../head");

// TEST CODE

assertEqual(head([1,2,3,4,5]), 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2]), 2);