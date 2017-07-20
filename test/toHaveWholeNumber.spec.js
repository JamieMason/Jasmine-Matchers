const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveWholeNumber', () => {
  describeToHaveX('toHaveWholeNumber', () => {
    describe('when subject IS a number with no positive decimal places', () => {
      it('should confirm', () => {
        expect({
          memberName: 1
        }).toHaveWholeNumber('memberName');
        expect({
          memberName: 0
        }).toHaveWholeNumber('memberName');
        expect({
          memberName: 0.0
        }).toHaveWholeNumber('memberName');
      });
    });
    describe('when subject is NOT a number with no positive decimal places', () => {
      it('should deny', () => {
        expect({
          memberName: NaN
        }).not.toHaveWholeNumber('memberName');
        expect({
          memberName: 1.1
        }).not.toHaveWholeNumber('memberName');
        expect({
          memberName: 0.1
        }).not.toHaveWholeNumber('memberName');
      });
    });
  });
});
