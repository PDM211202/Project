const assert = require('assert');
const { tinhTienDien } = require('./index');
const inputData = require('./result.json');

const expected = [3000, 40500, 28500];

describe('Test getStringBeforeColon', function () {
  inputData.forEach((item) => {
    it(`${Object.keys(item)}`, function () {
      const values = Object.values(item);
      const value = values[0];
      for (let i = 0; i < 3; i++) {
          const result = tinhTienDien(value[i]);
          assert.strictEqual(result, expected[i]);
      }
    });
  })
});