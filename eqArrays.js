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

// FUNCTION "eqArrays" IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// TEST CODE
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS