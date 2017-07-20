describe('toBeLessThanOrEqualTo', () => {
  it('asserts value is less or equal than a given number', () => {
    expect(1).toBeLessThanOrEqualTo(2);
    expect(-1).toBeLessThanOrEqualTo(1);
    expect(-2).toBeLessThanOrEqualTo(-1);
    expect(-2).toBeLessThanOrEqualTo(-2);
    expect(NaN).not.toBeLessThanOrEqualTo(0);
    expect(2).not.toBeLessThanOrEqualTo(1);
    expect(0).not.toBeLessThanOrEqualTo(-1);
  });
});
