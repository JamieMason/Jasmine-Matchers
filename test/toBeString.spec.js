describe('toBeString', () => {
  describe('when invoked', () => {
    describe('when subject IS a string of any length', () => {
      it('should confirm', () => {
        expect('').toBeString();
        expect(' ').toBeString();
      });
    });
    describe('when subject is NOT a string of any length', () => {
      it('should deny', () => {
        expect(null).not.toBeString();
      });
    });
  });
});
