describe('toBeNear', () => {
  describe('when invoked', () => {
    describe('when subject IS a number >= number-epsilon and <= number+epsilon', () => {
      it('should confirm', () => {
        expect(4.23223432434).toBeNear(4, 0.25);
        expect(22).toBeNear(20, 2);
        expect(-42).toBeNear(-40, 2);
      });
    });
    describe('when subject is NOT a number >= number-epsilon and <= number+epsilon', () => {
      it('should deny', () => {
        expect(NaN).not.toBeNear(42, 2);
        expect(4.23223432434).not.toBeNear(4, 0.2);
        expect(22).not.toBeNear(20, 1);
        expect(-42).not.toBeNear(-18, 11);
      });
    });
  });
});
