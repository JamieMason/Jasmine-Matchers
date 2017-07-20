const callSpy = require('./lib/callSpy');

describe('any.lessThanOrEqualTo', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy(8);
    shared.spy2 = callSpy(9);
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.lessThanOrEqualTo(9));
    expect(shared.spy2).toHaveBeenCalledWith(any.lessThanOrEqualTo(9));
  });
});
