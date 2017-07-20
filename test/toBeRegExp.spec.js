describe('toBeRegExp', () => {
  describe('when invoked', () => {
    describe('when value is an instance of RegExp', () => {
      it('should confirm', () => {
        expect(new RegExp()).toBeRegExp();
        expect(/abc/).toBeRegExp();
      });
    });
    describe('when value is not an instance of RegExp', () => {
      it('should deny', () => {
        expect(null).not.toBeRegExp();
        expect(() => {}).not.toBeRegExp();
        expect('abc').not.toBeRegExp();
      });
    });
  });
});
