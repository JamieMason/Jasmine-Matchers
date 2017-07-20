describe('toBeBoolean', () => {
  describe('when invoked', () => {
    describe('when subject not only truthy or falsy, but a boolean', () => {
      it('should confirm', () => {
        expect(true).toBeBoolean();
        expect(false).toBeBoolean();
        expect(new Boolean(true)).toBeBoolean();
        expect(new Boolean(false)).toBeBoolean();
      });
    });
    describe('when subject is truthy or falsy', () => {
      it('should deny', () => {
        expect(1).not.toBeBoolean();
        expect(0).not.toBeBoolean();
      });
    });
  });
});
