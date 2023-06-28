const assert = require('assert');
const { tinhTienDien } = require('./index');
const inputData = require('./result.json');

const expected = [70500, 9000, 60000, 145000, 77000, 149000, 257500, 325000, 390000, 659000, 626000, 569000];
const func = tinhTienDien;

describe('Test getStringBeforeColon', function () {
  let index = 0;
  inputData.forEach((item) => {
    it(`${Object.keys(item)}`, function () {
      const values = Object.values(item);
      const value = values[0];
      for (let i = 0; i < 3; i++) {
        const result = func(value[i]);
        assert.strictEqual(result, expected[index]);
        index++;
      }
    });
  })
});