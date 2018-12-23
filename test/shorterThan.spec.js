const callSpy = require('./lib/callSpy');

describe('any.shorterThan', () => {
  const shared = {};
  beforeEach(() => {
    shared.spy = callSpy('skeletor');
  });
  it('should confirm', () => {
    expect(shared.spy).toHaveBeenCalledWith(
      any.shorterThan('trogdor the burninator')
    );
  });
});
