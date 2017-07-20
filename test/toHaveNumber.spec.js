const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveNumber', () => {
  describeToHaveX('toHaveNumber', () => {
    describe('when subject IS a number', () => {
      it('should confirm', () => {
        expect({
          memberName: 1
        }).toHaveNumber('memberName');
        expect({
          memberName: 1.11
        }).toHaveNumber('memberName');
        expect({
          memberName: 1e3
        }).toHaveNumber('memberName');
        expect({
          memberName: 0.11
        }).toHaveNumber('memberName');
        expect({
          memberName: -11
        }).toHaveNumber('memberName');
      });
    });
    describe('when subject is NOT a number', () => {
      it('should deny', () => {
        expect({
          memberName: '1'
        }).not.toHaveNumber('memberName');
        expect({
          memberName: NaN
        }).not.toHaveNumber('memberName');
      });
    });
  });
});
