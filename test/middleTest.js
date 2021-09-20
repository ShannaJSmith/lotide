const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns 2, 3 for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
});




// OLD METHOD FOR REFERENCE:
// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);