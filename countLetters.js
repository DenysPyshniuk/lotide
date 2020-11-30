//Copy "assertEqual" function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //if actual is equal to expected then console log that assertion passed
    console.log(`✅️Assertion Passed: " ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    //if actual is not equal to expected then console log that assertion failed
    console.log(`🛑️Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION 'countLetters' IMPLEMENTATION
const countLetters = function(str) {
  //define var result to store return object
  let numberOfLetters = {};
  //for of loop to go through each of str letters
  for (let letter of str) {
  // if letter'' is not a whitespace in sentence than...
    if (letter !== " ") {// if letter'' is a key in str
      if (numberOfLetters[letter]) { // add 1 to '' numberOfLetters
        numberOfLetters[letter] += 1;
      } else {//if it`s first time that letter show up assign 1 to it
        numberOfLetters[letter] = 1;
      }
    }
  }
  return numberOfLetters;
};

//assertEqual(countLetters("lighthouse in the house")['t'], [2]);