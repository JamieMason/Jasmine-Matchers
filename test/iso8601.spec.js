// modules
var callSpy = require('./lib/callSpy');

// spec
describe('any.iso8601', function () {
  var shared = {};
  beforeEach(function () {
    shared.spy = callSpy('2013-07-08T07:29:15.863Z');
  });
  it('should confirm', function () {
    expect(shared.spy).toHaveBeenCalledWith(any.iso8601());
  });
});
