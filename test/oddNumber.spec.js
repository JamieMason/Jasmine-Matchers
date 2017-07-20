const callSpy = require('./lib/callSpy');

describe('any.oddNumber', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy(3);
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.oddNumber());
  });
});
