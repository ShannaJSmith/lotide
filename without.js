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

const without = function (source, itemsToRemove) { 
  let newArr = []; 
  for (let i = 0; i < source.length; i++) { 
    let isMatched = true; 
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        isMatched = false;
      } 
    } 
    if (isMatched) {
      newArr.push(source[i])
    }  
  }
    console.log(newArr);
  return newArr;
} 

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

without([1, 2, 3], [1])
without(["1", "2", "3"], [1, 2, "3"])
without(["Inu", "Kag", "Sess", "Rin", "Kagura"], ["Kagura"])
without(["Evil", "Good", "Bad"], ["Evil", "Bad"])