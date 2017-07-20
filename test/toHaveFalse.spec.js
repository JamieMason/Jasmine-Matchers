const describeToHaveBooleanX = require('./lib/describeToHaveBooleanX');

describe('toHaveFalse', () => {
  describeToHaveBooleanX('toHaveFalse', () => {
    describe('when primitive', () => {
      describe('when true', () => {
        it('should deny', () => {
          expect({
            memberName: true
          }).not.toHaveFalse('memberName');
        });
      });
      describe('when false', () => {
        it('should confirm', () => {
          expect({
            memberName: false
          }).toHaveFalse('memberName');
        });
      });
    });
    describe('when Boolean object', () => {
      describe('when true', () => {
        it('should deny', () => {
          expect({
            memberName: new Boolean(true)
          }).not.toHaveFalse('memberName');
        });
      });
      describe('when false', () => {
        it('should confirm', () => {
          expect({
            memberName: new Boolean(false)
          }).toHaveFalse('memberName');
        });
      });
    });
  });
});
