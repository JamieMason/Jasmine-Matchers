// modules
var callSpy = require('./lib/callSpy');

// spec
describe('any.arrayOfSize', function () {
  var shared = {};
  beforeEach(function () {
    shared.spy = callSpy(['a', 'b', 'c']);
  });
  it('should confirm', function () {
    expect(shared.spy).toHaveBeenCalledWith(any.arrayOfSize(3));
  });
});
