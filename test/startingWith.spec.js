// modules
var callSpy = require('./lib/callSpy');

// spec
describe('any.startingWith', function () {
  var shared = {};
  beforeEach(function () {
    shared.spy = callSpy('San Francisco');
  });
  it('should confirm', function () {
    expect(shared.spy).toHaveBeenCalledWith(any.startingWith('San'));
  });
});
