const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countOnly   = require('./countOnly');
const countLetters   = require('./countLetters');
const findKey = require('./findkey');
const findKeyByValue = require('./findKeybyValue');
const letterPositions   = require('./letterPositions');
const map   = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  eqObjects,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  countOnly,
  countLetters,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without,
};


// can also means this
// module.exports = {
//   head:   head,
//   tail:   tail,
//   middle: middle
// };