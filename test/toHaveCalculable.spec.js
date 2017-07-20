const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveCalculable', () => {
  describeToHaveX('toHaveCalculable', () => {
    describe('when subject CAN be coerced to be used in mathematical operations', () => {
      it('should confirm', () => {
        expect({
          memberName: '1'
        }).toHaveCalculable('memberName');
        expect({
          memberName: ''
        }).toHaveCalculable('memberName');
        expect({
          memberName: null
        }).toHaveCalculable('memberName');
      });
    });
    describe('when subject can NOT be coerced by JavaScript to be used in mathematical operations', () => {
      it('should deny', () => {
        expect({
          memberName: {}
        }).not.toHaveCalculable('memberName');
        expect({
          memberName: NaN
        }).not.toHaveCalculable('memberName');
      });
    });
  });
});
