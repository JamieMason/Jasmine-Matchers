// spec
describe('toThrowAnyError', function () {
  describe('when supplied a function', function () {
    describe('when function errors when invoked', function () {
      beforeEach(function () {
        this.throwError = function () {
          throw new Error('wut?');
        };
        this.badReference = function () {
          return badReference.someValue; // eslint-disable-line no-undef
        };
      });
      it('should confirm', function () {
        expect(this.throwError).toThrowAnyError();
        expect(this.badReference).toThrowAnyError();
      });
    });
    describe('when function does NOT error when invoked', function () {
      beforeEach(function () {
        this.noErrors = function () {};
      });
      it('should deny', function () {
        expect(this.noErrors).not.toThrowAnyError();
      });
    });
  });
});
