// modules
var callSpy = require('./lib/callSpy');

// spec
describe('any.nonEmptyObject', function () {
  var shared = {};
  beforeEach(function () {
    shared.spy = callSpy({
      prop: 'value'
    });
  });
  it('should confirm', function () {
    expect(shared.spy).toHaveBeenCalledWith(any.nonEmptyObject());
  });
});
