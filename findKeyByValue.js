// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅️Assertion Passed: " ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑️Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function (object, value) {
  const objectKeys = Object.keys(object);
  for (const key of objectKeys) {
    if (object[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);