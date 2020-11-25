// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅️Assertion Passed: " ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑️Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
//assertArraysEqual([1, 2, 3], [1, 2, 3]);

// TEST CODE
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


const without = function(source, itemsToRemove) {
  let restOfItems = source;
  for(let i = 0; i < source.length; i++) {
    for(let j = 0; j < itemsToRemove.length; j++){
      if(source[i] === itemsToRemove[j]) {
        restOfItems.splice(i, 1);
      }
    }
  }
  return restOfItems;
};
console.log(without([1, 6, 3, 2, 5], [1, 3, 2]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);