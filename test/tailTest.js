const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3);
assertEqual(tail([]));
console.log(words);