describe('sum(a, b)', () => {
  beforeEach(() => {
    this.sum = require('./sum');
  });
  it('is a function', () => {
    expect(this.sum).toBeFunction();
  });
  it('returns a number', () => {
    expect(this.sum(1, 2)).toBeNumber();
  });
  it('add numbers correctly', () => {
    expect(this.sum(1, 2)).toEqual(3);
  });
});
