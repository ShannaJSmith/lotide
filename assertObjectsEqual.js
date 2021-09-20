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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    let isItAnArray = Array.isArray(object1)[key] && Array.isArray(object2[key]);
    if (isItAnArray && eqArrays(object1[key], object2[key])) {
      return true;
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  //console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }); // => pass
assertObjectsEqual({ b: "2", a: "1" }, { a: "1", b: "2", c: "3" }); // => fail

module.exports = assertObjectsEqual;