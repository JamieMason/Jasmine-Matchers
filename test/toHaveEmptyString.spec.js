const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveEmptyString', () => {
  describeToHaveX('toHaveEmptyString', () => {
    describe('when subject IS a string with no characters', () => {
      it('should confirm', () => {
        expect({
          memberName: ''
        }).toHaveEmptyString('memberName');
      });
    });
    describe('when subject is NOT a string with no characters', () => {
      it('should deny', () => {
        expect({
          memberName: ' '
        }).not.toHaveEmptyString('memberName');
      });
    });
  });
});
