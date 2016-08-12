// modules
var callSpy = require('./lib/callSpy');

// spec
describe('any.greaterThanOrEqualTo', function () {
  var shared = {};
  beforeEach(function () {
    shared.spy = callSpy(8);
    shared.spy2 = callSpy(9);
  });
  it('should confirm', function () {
    expect(shared.spy).toHaveBeenCalledWith(any.greaterThanOrEqualTo(8));
    expect(shared.spy2).toHaveBeenCalledWith(any.greaterThanOrEqualTo(8));
  });
});
