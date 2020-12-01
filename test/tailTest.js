const assert = require('chai').assert;
const tail = require('../tail');

describe('tail function returns sliced from the begining array', () => {

  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });

  it('returns "2" for (["Hello", "Lighthouse", "Labs"]).length', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });


});