// modules
var callSpy = require('./lib/callSpy');

// spec
describe('any.after', function () {
  var shared = {};
  beforeEach(function () {
    shared.spy = callSpy(new Date('2013-01-01T00:00:00.000Z'));
  });
  it('should confirm', function () {
    expect(shared.spy).toHaveBeenCalledWith(any.after(new Date('1998-08-12T01:00:00.000Z')));
  });
});
