describe('toBeFalse', () => {
  describe('when invoked', () => {
    describe('when subject is not only falsy, but a boolean false', () => {
      it('should confirm', () => {
        expect(false).toBeFalse();
        expect(new Boolean(false)).toBeFalse();
      });
    });
    describe('when subject is falsy', () => {
      it('should deny', () => {
        expect(1).not.toBeFalse();
      });
    });
  });
});
