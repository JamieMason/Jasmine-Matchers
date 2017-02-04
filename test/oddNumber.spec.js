// modules
const callSpy = require('./lib/callSpy');

// spec
describe('any.oddNumber', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy(3);
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.oddNumber());
  });
});
