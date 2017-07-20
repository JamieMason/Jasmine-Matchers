const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveNumberWithinRange', () => {
  describeToHaveX('toHaveNumberWithinRange', () => {
    describe('when subject IS a number >= floor and <= ceiling', () => {
      it('should confirm', () => {
        expect({
          memberName: 0
        }).toHaveNumberWithinRange('memberName', 0, 2);
        expect({
          memberName: 1
        }).toHaveNumberWithinRange('memberName', 0, 2);
        expect({
          memberName: 2
        }).toHaveNumberWithinRange('memberName', 0, 2);
      });
    });
    describe('when subject is NOT a number >= floor and <= ceiling', () => {
      it('should deny', () => {
        expect({
          memberName: -3
        }).not.toHaveNumberWithinRange('memberName', 0, 2);
        expect({
          memberName: -2
        }).not.toHaveNumberWithinRange('memberName', 0, 2);
        expect({
          memberName: -1
        }).not.toHaveNumberWithinRange('memberName', 0, 2);
        expect({
          memberName: 3
        }).not.toHaveNumberWithinRange('memberName', 0, 2);
        expect({
          memberName: NaN
        }).not.toHaveNumberWithinRange('memberName', 0, 2);
      });
    });
  });
});
