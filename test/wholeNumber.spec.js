// modules
const callSpy = require('./lib/callSpy');

// spec
describe('any.wholeNumber', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy(15);
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.wholeNumber());
  });
});
