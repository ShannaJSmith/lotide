const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let arrMid = [];
  if (array.length < 3) {
    return [];
  }
  if (array.length % 2 === 0) {
    arrMid.push(array[(array.length / 2) - 1]);
    arrMid.push(array[array.length / 2]);
  } else {
    arrMid.push(array[Math.floor(array.length / 2)]);
  } return arrMid;
};

module.exports = middle;
