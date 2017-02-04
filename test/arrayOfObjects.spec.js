// modules
const callSpy = require('./lib/callSpy');

// spec
describe('any.arrayOfObjects', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy([{}, new Object()]);
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.arrayOfObjects());
  });
});
