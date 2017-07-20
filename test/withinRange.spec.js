const callSpy = require('./lib/callSpy');

describe('any.withinRange', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy(11);
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.withinRange(10, 15));
  });
});
