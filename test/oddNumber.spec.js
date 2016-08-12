// modules
var callSpy = require('./lib/callSpy');

// spec
describe('any.oddNumber', function () {
  var shared = {};
  beforeEach(function () {
    shared.spy = callSpy(3);
  });
  it('should confirm', function () {
    expect(shared.spy).toHaveBeenCalledWith(any.oddNumber());
  });
});
