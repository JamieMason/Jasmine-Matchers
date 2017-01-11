// spec
describe('toBeRegExp', function () {
  describe('when invoked', function () {
    describe('when value is an instance of RegExp', function () {
      it('should confirm', function () {
        expect(new RegExp()).toBeRegExp();
      });
    });
    describe('when value is not an instance of RegExp', function () {
      it('should deny', function () {
        expect(null).not.toBeRegExp();
      });
    });
  });
});
