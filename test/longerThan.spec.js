const callSpy = require('./lib/callSpy');

describe('any.longerThan', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy('antidisestablishmentarianism');
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.longerThan('dog'));
  });
});
