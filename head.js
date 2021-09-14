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

const head = function(array) {
  return array[0]
}
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), "Hello");