const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
//const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
//const assertObjectsEqual = require('./assertObjectsEqual');

module.exports = {
  head,
  tail,
  middle,
  //eqObjects,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  //assertObjectsEqual,
};


// can also means this
// module.exports = {
//   head:   head,
//   tail:   tail,
//   middle: middle
// };