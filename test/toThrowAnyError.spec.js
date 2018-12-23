describe('toThrowAnyError', () => {
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
      it('should confirm', () => {
        expect(throwError).toThrowAnyError();
        expect(badReference).toThrowAnyError();
      });
    });
    describe('when function does NOT error when invoked', () => {
      let noErrors;
      beforeEach(() => {
        noErrors = function() {};
      });
      it('should deny', () => {
        expect(noErrors).not.toThrowAnyError();
      });
    });
  });
});
