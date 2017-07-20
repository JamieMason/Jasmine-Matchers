const callSpy = require('./lib/callSpy');

describe('any.nonEmptyArray', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy([0, false, 1, true]);
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.nonEmptyArray());
  });
});
