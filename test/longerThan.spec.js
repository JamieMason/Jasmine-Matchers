// modules
var callSpy = require('./lib/callSpy');

// spec
describe('any.longerThan', function () {
  var shared = {};
  beforeEach(function () {
    shared.spy = callSpy('antidisestablishmentarianism');
  });
  it('should confirm', function () {
    expect(shared.spy).toHaveBeenCalledWith(any.longerThan('dog'));
  });
});
