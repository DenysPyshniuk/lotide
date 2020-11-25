const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
assertArraysEqual([1, 2, 3], [1, 2, 3]);


const middle = function(arr) {
  let result = [];
  if(arr.length <= 2) {
    return result;
  } else if (arr.length % 2 === 0) {
    result.push(arr[arr.length / 2 - 1]);
    result.push(arr[arr.length / 2]);
    return result;
  } else {
    result.push(arr[arr.length / 2 - 0.5]);
  }
  return result;
};
console.log(middle([1, 2, 3, 4, 5]));