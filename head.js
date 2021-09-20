let pass = "✅✅✅Assertion Passed: ";
let fail = "🛑🛑🛑Assertion Failed: ";
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${pass} ${actual} === ${expected}`);
  } else {
    console.log(`${fail} ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  if (array === []) {
    return undefined;
  }
  return array[0];
};

head([10, 30, 2]);
head([]);
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
