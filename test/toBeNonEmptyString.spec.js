describe('toBeNonEmptyString', () => {
  describe('when invoked', () => {
    describe('when subject IS a string with at least one character', () => {
      it('should confirm', () => {
        expect(' ').toBeNonEmptyString();
      });
    });
    describe('when subject is NOT a string with at least one character', () => {
      it('should deny', () => {
        expect('').not.toBeNonEmptyString();
        expect(null).not.toBeNonEmptyString();
      });
    });
  });
});
