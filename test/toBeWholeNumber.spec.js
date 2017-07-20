describe('toBeWholeNumber', () => {
  describe('when invoked', () => {
    describe('when subject IS a number with no positive decimal places', () => {
      it('should confirm', () => {
        expect(1).toBeWholeNumber();
        expect(0).toBeWholeNumber();
        expect(0.0).toBeWholeNumber();
      });
    });
    describe('when subject is NOT a number with no positive decimal places', () => {
      it('should deny', () => {
        expect(NaN).not.toBeWholeNumber();
        expect(1.1).not.toBeWholeNumber();
        expect(0.1).not.toBeWholeNumber();
      });
    });
  });
});
