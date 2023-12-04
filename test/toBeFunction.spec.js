describe('toBeFunction', () => {
  describe('when invoked', () => {
    describe('when subject IS a function', () => {
      it('should confirm', () => {
        expect(() => {}).toBeFunction();
      });
      it('should confirm for async functions', () => {
        expect(async () => {}).toBeFunction();
      });
    });
    describe('when subject is NOT a function', () => {
      it('should deny', () => {
        expect(/regexp/).not.toBeFunction();
      });
    });
  });
});
