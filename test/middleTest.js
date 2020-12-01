const assertArraysEqual = require("../assertArraysEqual");
const middle = require('../middle')

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]), true); //=> Should PASS
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [4]), false); //=> Should not PASS