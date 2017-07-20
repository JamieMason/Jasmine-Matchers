const callSpy = require('./lib/callSpy');

describe('any.sameLengthAs', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy('Cat');
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(any.sameLengthAs('Dog'));
  });
});
