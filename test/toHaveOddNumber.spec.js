const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveOddNumber', () => {
  describeToHaveX('toHaveOddNumber', () => {
    describe('when subject IS an odd number', () => {
      it('should confirm', () => {
        expect({
          memberName: 1
        }).toHaveOddNumber('memberName');
      });
    });
    describe('when subject is NOT an odd number', () => {
      it('should deny', () => {
        expect({
          memberName: 2
        }).not.toHaveOddNumber('memberName');
        expect({
          memberName: NaN
        }).not.toHaveOddNumber('memberName');
      });
    });
  });
});
