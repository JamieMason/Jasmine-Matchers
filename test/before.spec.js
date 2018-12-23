const callSpy = require('./lib/callSpy');

describe('any.before', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy(new Date('1998-08-12T01:00:00.000Z'));
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(
      any.before(new Date('2013-01-01T00:00:00.000Z'))
    );
  });
});
