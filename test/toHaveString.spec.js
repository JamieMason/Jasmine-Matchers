const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveString', () => {
  describeToHaveX('toHaveString', () => {
    describe('when subject IS a string of any length', () => {
      it('should confirm', () => {
        expect({
          memberName: ''
        }).toHaveString('memberName');
        expect({
          memberName: ' '
        }).toHaveString('memberName');
      });
    });
    describe('when subject is NOT a string of any length', () => {
      it('should deny', () => {
        expect({
          memberName: null
        }).not.toHaveString('memberName');
      });
    });
  });
});
