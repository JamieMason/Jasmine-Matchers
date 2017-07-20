const callSpy = require('./lib/callSpy');

describe('any.arrayOfObjects', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy([{}, new Object()]);
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.arrayOfObjects());
  });
});
