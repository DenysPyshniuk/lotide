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
  //define var result to store return object
  let numberOfLetters = {};
  //for of loop to go through each of str letters
  for(let letter of str) {
  // if letter'' is not a whitespace in sentence than...
    if(letter !== " ") {
  // if letter'' is a key in str
      if(numberOfLetters[letter]) {
  // add 1 to '' numberOfLetters
        numberOfLetters[letter] += 1;
      } else {
  //if it`s first time that letter show up assign 1 to it
        numberOfLetters[letter] = 1;
      }
    }
  }
  console.log("letter h : ", numberOfLetters["h"]);
  return numberOfLetters;
};

console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house")['t'], [2]);


//let result = countLetters("lighthouse in the house");
