// modules
const callSpy = require('./lib/callSpy');

// spec
describe('any.arrayOfSize', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy(['a', 'b', 'c']);
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.arrayOfSize(3));
  });
});
