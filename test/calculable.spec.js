const callSpy = require('./lib/callSpy');

describe('any.calculable', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy('1');
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.calculable());
  });
});
