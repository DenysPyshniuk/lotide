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


const takeUntil = function(array, callback) {
  let results = [];
  for(item of array){
    if(callback(item) !== true) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};


///////// F I R S T     T E S T  /////////
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const results1 = takeUntil(data1, (x) => x < 0);
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));


console.log("----------------------");
///////// S E C O N D     T E S T  /////////
const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));

////////R E S U L T /////////

// [1, 2, 5, 7, 2];
// ---["I've", "been", "to", "Hollywood"];