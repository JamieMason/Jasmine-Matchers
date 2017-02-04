// modules
const callSpy = require('./lib/callSpy');

// spec
describe('any.evenNumber', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy(4);
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.evenNumber());
  });
});
