//Copy "assertEqual" function
const assertEqual = function(actual, expected) {
  //if actual is equal to expected then console log that assertion passed
  if (actual === expected) {
    console.log(`✅️Assertion Passed: " ${actual} ===  ${expected}`);
  } else if(actual !== expected) {
  //if actual is not equal to expected then console log that assertion failed
    console.log(`🛑️Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Copy "eqArrays" function
const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// FUNCTION 'assertArraysEqual' IMPLEMENTATION
//function to check if arrays are equal, console log that arrays are equal or not
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅️Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑️Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// TEST CODE
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
