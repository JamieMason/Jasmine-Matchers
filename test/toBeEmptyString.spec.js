describe('toBeEmptyString', () => {
  describe('when invoked', () => {
    describe('when subject IS a string with no characters', () => {
      it('should confirm', () => {
        expect('').toBeEmptyString();
      });
    });
    describe('when subject is NOT a string with no characters', () => {
      it('should deny', () => {
        expect(' ').not.toBeEmptyString();
      });
    });
  });
});
