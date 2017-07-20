describe('toBeDate', () => {
  describe('when invoked', () => {
    describe('when value is an instance of Date', () => {
      it('should confirm', () => {
        expect(new Date()).toBeDate();
      });
    });
    describe('when value is NOT an instance of Date', () => {
      it('should deny', () => {
        expect(null).not.toBeDate();
      });
    });
  });
});
