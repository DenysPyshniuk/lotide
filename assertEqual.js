const assertEqual = function(actual, expected) {
  //if actual is equal to expected then console log that assertion passed
  if (actual === expected) {
    console.log(`✅️Assertion Passed: " ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    //if actual is not equal to expected then console log that assertion failed
    console.log(`🛑️Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;