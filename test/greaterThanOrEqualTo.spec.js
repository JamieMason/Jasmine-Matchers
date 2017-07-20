const callSpy = require('./lib/callSpy');

describe('any.greaterThanOrEqualTo', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy(8);
    shared.spy2 = callSpy(9);
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.greaterThanOrEqualTo(8));
    expect(shared.spy2).toHaveBeenCalledWith(any.greaterThanOrEqualTo(8));
  });
});
