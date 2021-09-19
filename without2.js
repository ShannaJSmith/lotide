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

// const without = function (source, itemsToRemove) {
//   let newArr = [];  //make new list for unchanged items to live in
//   for (i = 0; i < source.length; i++) {  //loop through each element in the source list
//       if (source[i] !== itemsToRemove[i]) { // if an element from the source list does not match with an element to be removed in the itemsTobeRemoved list
//         newArr.push(source[i]) // take those unmatched items and put them in the new list
//         }
//       } 
//       console.log(newArr);
//     };

const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1 && newArr.indexOf(source[i]) === -1) {
      newArr.push(source[i]);
    }
  }
  console.log(newArr);
  return newArr;
};

without([1, 2, 3], [1]) 
without(["1", "2", "3"], [1, 2, "3"])
without(["Inu", "Kag", "Sess", "Rin", "Kagura"], ["Kagura"])
without(["Evil", "Good", "Bad"], ["Evil", "Bad"])

//why do we not need to loop through it twice?