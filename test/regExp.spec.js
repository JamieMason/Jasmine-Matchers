// modules
var callSpy = require('./lib/callSpy');

// spec
describe('any.regExp', function () {
  var shared = {};
  beforeEach(function () {
    shared.spy = callSpy(/abc/);
  });
  it('should confirm', function () {
    expect(shared.spy).toHaveBeenCalledWith(any.regExp());
  });
});
