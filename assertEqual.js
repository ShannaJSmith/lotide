let pass = "✅✅✅Assertion Passed: ";
let fail = "🛑🛑🛑Assertion Failed: ";
let equals = " === ";
let not = " !== ";
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${pass}` + actual + `${equals}` + expected);
  } else {
    console.log(`${fail}` + actual + `${not}` + expected);
  }
};

assertEqual("Lighthouse labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("same", "same");
assertEqual("not", "the same");
assertEqual(5, 5);
assertEqual(1, 50);

