// modules
const callSpy = require('./lib/callSpy');

// spec
describe('any.arrayOfNumbers', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy([1, new Number(6)]);
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.arrayOfNumbers());
  });
});
