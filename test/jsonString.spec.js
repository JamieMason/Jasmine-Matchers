// modules
const callSpy = require('./lib/callSpy');

// spec
describe('any.jsonString', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy('{}');
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.jsonString());
  });
});
