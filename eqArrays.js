let pass = "✅✅✅Assertion Passed: ";
let fail = "🛑🛑🛑Assertion Failed: ";
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${pass} ${actual} === ${expected}`);
  } else {
    console.log(`${fail} ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);