// test/headTest.js

const assert = require("chai").assert;
const head = require("../head");

// TEST CODE

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.deepEqual(head(['5']), '5');
  });

  it("returns 1 for [1,2,3,4,5]", () => {
    assert.deepEqual(head([1, 2, 3, 4, 5]), 1);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});