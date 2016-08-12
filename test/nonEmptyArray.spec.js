// modules
var callSpy = require('./lib/callSpy');

// spec
describe('any.nonEmptyArray', function () {
  var shared = {};
  beforeEach(function () {
    shared.spy = callSpy([0, false, 1, true]);
  });
  it('should confirm', function () {
    expect(shared.spy).toHaveBeenCalledWith(any.nonEmptyArray());
  });
});
