require('jasmine-expect');
const sum = require('./sum');

describe('sum(a, b)', () => {
  it('is a function', () => {
    expect(sum).toBeFunction();
  });
  it('returns a number', () => {
    expect(sum(1, 2)).toBeNumber();
  });
  it('add numbers correctly', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
