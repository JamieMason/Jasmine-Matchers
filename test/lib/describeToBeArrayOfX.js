const describeWhenNotArray = require('./describeWhenNotArray');

module.exports = function describeToBeArrayOfX(name, options) {
  describe(name, () => {
    describe('when invoked', () => {
      describe('when subject is a true Array', () => {
        describe('when subject has no members', () => {
          it(
            'should confirm (an empty array of ' + options.type + 's is valid)',
            () => {
              expect([])[name]();
            }
          );
        });
        describe('when subject has members', () => {
          describe(
            'when subject has a mix of ' + options.type + 's and other items',
            () => {
              it('should deny', options.whenMixed);
            }
          );
          describe('when subject has only ' + options.type + 's', () => {
            it('should confirm', options.whenValid);
          });
          describe('when subject has other items', () => {
            it('should deny', options.whenInvalid);
          });
        });
      });
      describeWhenNotArray(name);
    });
  });
};
