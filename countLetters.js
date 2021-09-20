let pass = "✅✅✅Assertion Passed: ";
let fail = "🛑🛑🛑Assertion Failed: ";
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${pass} ${actual} === ${expected}`);
  } else {
    console.log(`${fail} ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let objOfLetters = {};
  let newString = sentence.split(' ').join('');
  for (let i = 0; i < newString.length; i++) {
    if (objOfLetters[newString[i]]) {
      objOfLetters[newString[i]] += 1;
    } else {
      objOfLetters[newString[i]] = 1;
    }
  } //console.log(objOfLetters);
  return objOfLetters;
};
const result1 = countLetters('lighthouse in the house');
assertEqual(result1['l'], 1);
assertEqual(result1['p'], undefined);

module.exports = countLetters;