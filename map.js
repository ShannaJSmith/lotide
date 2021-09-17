const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
}

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`)
  }
};

const characters = ['Inuyasha', 'Sesshomaru', 'Killua', 'Xie Lian', 'Wei Wuxian']

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


//Tests:
const results1 = map(characters, character => character[0]);
console.log(results1);
const results2 = map(characters, character => character[2]);
console.log(results2);
const results3 = map(characters, character => character.length);
console.log(results3);
const results4 = map(characters, character => character.toUpperCase());
console.log(results4);

assertArraysEqual(results1, ['I', 'S', 'K', 'X', 'W']);
assertArraysEqual(results2, ['u', 's', 'l', 'e', 'i']);
assertArraysEqual(results3, [8, 10, 6, 8, 10]);
assertArraysEqual(results4, [ 'INUYASHA', 'SESSHOMARU', 'KILLUA', 'XIE LIAN', 'WEI WUXIAN' ]);
