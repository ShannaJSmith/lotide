// let pass = "✅✅✅Assertion Passed: ";
// let fail = "🛑🛑🛑Assertion Failed: ";
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("same", "same");
assertEqual("not", "the same");
assertEqual(5, 5);
assertEqual(1, 50);

