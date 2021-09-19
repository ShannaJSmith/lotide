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

const letterPositions = function (sentence) {
  const results = {};
  for (i = 0; i < sentence.length; i++) {
   if (results[sentence[i]]) {
    results[sentence[i]].push(i);
   } else {
     results[sentence[i]] = [i];
   } 
  } console.log(results)
  return results;
}

const result1 = letterPositions('lighthouse in the house');
assertArraysEqual(result1['l'], [0]);
assertArraysEqual(result1['h'], [3, 5, 15, 18]);
assertArraysEqual(result1['o'], [6, 19]);

const result2 = letterPositions('hello');
assertArraysEqual(result2['h'], [0]);
assertArraysEqual(result2['e'], [1]);
assertArraysEqual(result2['o'], [4]);
assertArraysEqual(result2['1'], [2, 3]);