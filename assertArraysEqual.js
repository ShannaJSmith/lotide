const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`โโโ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`๐๐๐Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;