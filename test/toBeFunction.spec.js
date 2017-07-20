describe('toBeFunction', () => {
  describe('when invoked', () => {
    describe('when subject IS a function', () => {
      it('should confirm', () => {
        expect(() => {}).toBeFunction();
      });
    });
    describe('when subject is NOT a function', () => {
      it('should deny', () => {
        expect(/regexp/).not.toBeFunction();
      });
    });
  });
});
