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
    console.log(`✅️Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑️Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
//assertArraysEqual([1, 2, 3], [1, 2, 3]);




const letterPositions = function(sentence) {
//define var result to store return object
  const results = {};
//for loop to go through each of sentence letters
  for(let i = 0; i < sentence.length; i++) {
// if letter'' is a key in sentence
    if(results[sentence[i]]) {
// push index to 'array of results'
      results[sentence[i]].push(i);
    } else {
// else, create new key with a new arr as its value
      results[sentence[i]] = [i];
    }
  }
  // logic to update results here
  return results;
};
//assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("lighthouse in the house")['o'], [6, 19]);