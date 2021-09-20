const head = require('../head');
const assertEqual = require('../assertEqual');

console.log(head([10, 30, 2]));
console.log(head([]));
console.log(assertEqual(head([5, 6, 7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));