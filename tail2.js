let pass = "✅✅✅Assertion Passed: ";
let fail = "🛑🛑🛑Assertion Failed: ";
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${pass} ${actual} === ${expected}`);
  } else {
    console.log(`${fail} ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newTail = [];
  for (let i = 1; i < array.length; i++) {
    newTail.push(array[i]);
  }
  return newTail;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(tail([]));
console.log(words);
