// modules
var callSpy = require('./lib/callSpy');

// spec
describe('any.arrayOfStrings', function () {
  var shared = {};
  beforeEach(function () {
    shared.spy = callSpy(['', ' ', new String('hello')]);
  });
  it('should confirm', function () {
    expect(shared.spy).toHaveBeenCalledWith(any.arrayOfStrings());
  });
});
