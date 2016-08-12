// spec
describe('toBeGreaterThanOrEqualTo', function () {
  it('asserts value is greater or equal than a given number', function () {
    expect(2).toBeGreaterThanOrEqualTo(1);
    expect(1).toBeGreaterThanOrEqualTo(-1);
    expect(-1).toBeGreaterThanOrEqualTo(-2);
    expect(-2).toBeGreaterThanOrEqualTo(-2);
    expect(NaN).not.toBeGreaterThanOrEqualTo(0);
    expect(1).not.toBeGreaterThanOrEqualTo(2);
    expect(-1).not.toBeGreaterThanOrEqualTo(0);
  });
});
