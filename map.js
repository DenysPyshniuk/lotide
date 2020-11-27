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

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));

// const results3 = map(words, (word) => word[3]);
// assertEqual(results3, ["u", "t", undefined, "o", undefined]);

// const results4 = map(words, (word) => word.length);
// assertEqual(results4, [6, 6, 2, 5, 3]);
