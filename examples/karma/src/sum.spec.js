describe('sum(a, b)', function () {
  it('is a function', function () {
    expect(window.sum).toBeFunction();
  });
  it('returns a number', function () {
    expect(window.sum(1, 2)).toBeNumber();
  });
  it('add numbers correctly', function () {
    expect(window.sum(1, 2)).toEqual(3);
  });
});
