// modules
const callSpy = require('./lib/callSpy');

// spec
describe('any.longerThan', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy('antidisestablishmentarianism');
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.longerThan('dog'));
  });
});
