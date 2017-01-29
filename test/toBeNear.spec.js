// spec
describe('toBeNear', function () {
  describe('when invoked', function () {
    describe('when subject IS a number >= number-epsilon and <= number+epsilon', function () {
      it('should confirm', function () {
        expect(4.23223432434).toBeNear(4, 0.25);
        expect(22).toBeNear(20, 2);
        expect(-42).toBeNear(-40, 2);
      });
    });
    describe('when subject is NOT a number >= number-epsilon and <= number+epsilon', function () {
      it('should deny', function () {
        expect(NaN).not.toBeNear(42, 2);
        expect(4.23223432434).not.toBeNear(4, 0.2);
        expect(22).not.toBeNear(20, 1);
        expect(-42).not.toBeNear(-18, 11);
      });
    });
  });
});
