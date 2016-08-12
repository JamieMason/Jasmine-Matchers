// modules
var callSpy = require('./lib/callSpy');

// spec
describe('any.arrayOfNumbers', function () {
  var shared = {};
  beforeEach(function () {
    shared.spy = callSpy([1, new Number(6)]);
  });
  it('should confirm', function () {
    expect(shared.spy).toHaveBeenCalledWith(any.arrayOfNumbers());
  });
});
