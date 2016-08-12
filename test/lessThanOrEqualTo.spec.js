// modules
var callSpy = require('./lib/callSpy');

// spec
describe('any.lessThanOrEqualTo', function () {
  var shared = {};
  beforeEach(function () {
    shared.spy = callSpy(8);
    shared.spy2 = callSpy(9);
  });
  it('should confirm', function () {
    expect(shared.spy).toHaveBeenCalledWith(any.lessThanOrEqualTo(9));
    expect(shared.spy2).toHaveBeenCalledWith(any.lessThanOrEqualTo(9));
  });
});
