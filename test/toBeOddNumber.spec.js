describe('toBeOddNumber', () => {
  describe('when invoked', () => {
    describe('when subject IS an odd number', () => {
      it('should confirm', () => {
        expect(1).toBeOddNumber();
      });
    });
    describe('when subject is NOT an odd number', () => {
      it('should deny', () => {
        expect(2).not.toBeOddNumber();
        expect(NaN).not.toBeOddNumber();
      });
    });
  });
});
