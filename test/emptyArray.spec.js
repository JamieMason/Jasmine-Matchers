const callSpy = require('./lib/callSpy');

describe('any.emptyArray', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy([]);
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.emptyArray());
  });
});
