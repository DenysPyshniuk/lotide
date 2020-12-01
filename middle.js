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

module.exports = middle;