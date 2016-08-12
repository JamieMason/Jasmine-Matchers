// modules
var callSpy = require('./lib/callSpy');

// spec
describe('any.withinRange', function () {
  var shared = {};
  beforeEach(function () {
    shared.spy = callSpy(11);
  });
  it('should confirm', function () {
    expect(shared.spy).toHaveBeenCalledWith(any.withinRange(10, 15));
  });
});
