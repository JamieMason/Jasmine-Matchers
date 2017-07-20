const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveMethod', () => {
  describeToHaveX('toHaveMethod', () => {
    describe('when subject IS a function', () => {
      it('should confirm', () => {
        expect({
          memberName() {}
        }).toHaveMethod('memberName');
      });
    });
    describe('when subject is NOT a function', () => {
      it('should deny', () => {
        expect({
          memberName: /regexp/
        }).not.toHaveMethod('memberName');
      });
    });
  });
});
