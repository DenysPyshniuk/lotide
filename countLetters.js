// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅️Assertion Passed: " ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑️Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);


const countLetters = function(str) {
  let numberOfLetters = {};
  for(let letter of str) {
    if(letter !== " ") {
      if (numberOfLetters[letter]) {
        numberOfLetters[letter] += 1;
      } else {
        numberOfLetters[letter] = 1;
      }
    }
  }
  return numberOfLetters;
};

console.log(countLetters("lighthouse in the house"));



//let result = countLetters("lighthouse in the house");
