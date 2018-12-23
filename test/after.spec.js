const callSpy = require('./lib/callSpy');

describe('any.after', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy(new Date('2013-01-01T00:00:00.000Z'));
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(
      any.after(new Date('1998-08-12T01:00:00.000Z'))
    );
  });
});
