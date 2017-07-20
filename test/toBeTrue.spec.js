describe('toBeTrue', () => {
  describe('when invoked', () => {
    describe('when subject is not only truthy, but a boolean true', () => {
      it('should confirm', () => {
        expect(true).toBeTrue();
        expect(new Boolean(true)).toBeTrue();
      });
    });
    describe('when subject is truthy', () => {
      it('should deny', () => {
        expect(1).not.toBeTrue();
      });
    });
  });
});
