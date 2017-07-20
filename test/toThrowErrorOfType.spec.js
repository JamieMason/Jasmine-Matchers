describe('toThrowErrorOfType', () => {
  describe('when supplied a function', () => {
    describe('when function errors when invoked', () => {
      beforeEach(function () {
        this.throwError = function () {
          throw new Error('wut?');
        };
        this.badReference = function () {
          return badReference.someValue; // eslint-disable-line no-undef
        };
      });
      describe('when the error is of the expected type', () => {
        it('should confirm', function () {
          expect(this.throwError).toThrowErrorOfType('Error');
          expect(this.badReference).toThrowErrorOfType('ReferenceError');
        });
      });
      describe('when the error is NOT of the expected type', () => {
        it('should confirm', function () {
          expect(this.throwError).not.toThrowErrorOfType('ReferenceError');
          expect(this.badReference).not.toThrowErrorOfType('Error');
        });
      });
    });
  });
});
