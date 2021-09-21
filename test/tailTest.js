// test/tailTest.js

const assert = require("chai").assert;
const tail = require("../tail");

// TEST CODE

//assertArraysEqual(tail(["Hello", "Lighthouse", "Labs", "Rocks"]), ["Lighthouse", "Labs", "Rocks"]);

describe("#tail", () => {
  it("returns ['e', 'l', 'l', 'o'] for ['h', 'e', 'l', 'l', 'o']", () => {
    assert.deepEqual(tail(["H", "e", "l", "l", "o"]), ["e", "l", "l", "o"]);
  });

  it("returns ['Hello', 'Lighthouse', 'Labs', 'Rocks'] for ['5']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs", "Rocks"]), ["Lighthouse", "Labs", "Rocks"]);
  });
});