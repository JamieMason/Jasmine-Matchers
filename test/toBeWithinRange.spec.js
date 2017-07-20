describe('toBeWithinRange', () => {
  describe('when invoked', () => {
    describe('when subject IS a number >= floor and <= ceiling', () => {
      it('should confirm', () => {
        expect(0).toBeWithinRange(0, 2);
        expect(1).toBeWithinRange(0, 2);
        expect(2).toBeWithinRange(0, 2);
      });
    });
    describe('when subject is NOT a number >= floor and <= ceiling', () => {
      it('should deny', () => {
        expect(-3).not.toBeWithinRange(0, 2);
        expect(-2).not.toBeWithinRange(0, 2);
        expect(-1).not.toBeWithinRange(0, 2);
        expect(3).not.toBeWithinRange(0, 2);
        expect(NaN).not.toBeWithinRange(0, 2);
      });
    });
  });
});
