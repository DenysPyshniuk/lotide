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
//Copy "eqArrays" function
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Copy "eqObjects" function
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  //if length of the objects is diffrent = false
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  //loop with "for in" and transform object into an array
  for (let key in object1) {
    //Checking if array is array
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key]))
        //if array NOT array than return false
        return false;
    } else if (typeof object1[key] === "object") {
      //if type is object than return true
      return eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) return false; //if type is NOT an object than return false
  }
  return true;
};

// FUNCTION 'assertObjectsEqual' IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅️ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️ Assertation Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, ba)); // => false