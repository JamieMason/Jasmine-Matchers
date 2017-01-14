//spec
describe('toBeValidDate', function() {
  describe('when invoked', function () {
    describe('when value is a valid instance of Date', function() {
      it('should confirm', function () {
        expect(new Date()).toBeValidDate();
      });
    });
    describe('when value is NOT a valid instance of Date', function() {
      it('should deny', function() {
        expect(null).not.toBeValidDate();
        expect(new Date('invalid')).not.toBeValidDate();
      });
    });
  });
});
