describe('toBeNumber', () => {
  describe('when invoked', () => {
    describe('when subject IS a number', () => {
      it('should confirm', () => {
        expect(1).toBeNumber();
        expect(1.11).toBeNumber();
        expect(1e3).toBeNumber();
        expect(0.11).toBeNumber();
        expect(-11).toBeNumber();
      });
    });
    describe('when subject is NOT a number', () => {
      it('should deny', () => {
        expect('1').not.toBeNumber();
        expect(NaN).not.toBeNumber();
      });
    });
  });
});
