// modules
var callSpy = require('./lib/callSpy');

// spec
describe('any.wholeNumber', function () {
  var shared = {};
  beforeEach(function () {
    shared.spy = callSpy(15);
  });
  it('should confirm', function () {
    expect(shared.spy).toHaveBeenCalledWith(any.wholeNumber());
  });
});
