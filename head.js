// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual')

const head = function (arr) {
  if (arr[0] === []) {
    return undefined;
  } else {
    return arr[0];
  }
};

module.exports = head;
