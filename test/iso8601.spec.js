const callSpy = require('./lib/callSpy');

describe('any.iso8601', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy('2013-07-08T07:29:15.863Z');
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.iso8601());
  });
});
