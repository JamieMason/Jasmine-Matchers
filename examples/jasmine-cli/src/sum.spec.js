require('jasmine-expect');

describe('sum(a, b)', function () {
  beforeEach(function () {
    this.sum = require('./sum');
  });
  it('is a function', function () {
    expect(this.sum).toBeFunction();
  });
  it('returns a number', function () {
    expect(this.sum(1, 2)).toBeNumber();
  });
  it('add numbers correctly', function () {
    expect(this.sum(1, 2)).toEqual(3);
  });
});
