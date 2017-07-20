const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveNonEmptyString', () => {
  describeToHaveX('toHaveNonEmptyString', () => {
    describe('when subject IS a string with at least one character', () => {
      it('should confirm', () => {
        expect({
          memberName: ' '
        }).toHaveNonEmptyString('memberName');
      });
    });
    describe('when subject is NOT a string with at least one character', () => {
      it('should deny', () => {
        expect({
          memberName: ''
        }).not.toHaveNonEmptyString('memberName');
        expect({
          memberName: null
        }).not.toHaveNonEmptyString('memberName');
      });
    });
  });
});
