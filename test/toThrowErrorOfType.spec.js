describe('toThrowErrorOfType', () => {
  describe('when supplied a function', () => {
    describe('when function errors when invoked', () => {
      let throwError;
      let badReference;
      beforeEach(() => {
        throwError = function() {
          throw new Error('wut?');
        };
        badReference = function() {
          return doesNotExist.someValue; // eslint-disable-line no-undef
        };
      });
      describe('when the error is of the expected type', () => {
        it('should confirm', () => {
          expect(throwError).toThrowErrorOfType('Error');
          expect(badReference).toThrowErrorOfType('ReferenceError');
        });
      });
      describe('when the error is NOT of the expected type', () => {
        it('should confirm', () => {
          expect(throwError).not.toThrowErrorOfType('ReferenceError');
          expect(badReference).not.toThrowErrorOfType('Error');
        });
      });
    });
  });
});
