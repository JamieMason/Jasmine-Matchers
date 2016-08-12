// modules
var callSpy = require('./lib/callSpy');

// spec
describe('any.sameLengthAs', function () {
  var shared = {};
  beforeEach(function () {
    shared.spy = callSpy('Cat');
  });
  it('should confirm', function () {
    expect(shared.spy).toHaveBeenCalledWith(any.sameLengthAs('Dog'));
  });
});
