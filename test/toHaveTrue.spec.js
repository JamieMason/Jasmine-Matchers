const describeToHaveBooleanX = require('./lib/describeToHaveBooleanX');

describe('toHaveTrue', () => {
  describeToHaveBooleanX('toHaveTrue', () => {
    describe('when primitive', () => {
      describe('when true', () => {
        it('should confirm', () => {
          expect({
            memberName: true
          }).toHaveTrue('memberName');
        });
      });
      describe('when false', () => {
        it('should deny', () => {
          expect({
            memberName: false
          }).not.toHaveTrue('memberName');
        });
      });
    });
    describe('when Boolean object', () => {
      describe('when true', () => {
        it('should confirm', () => {
          expect({
            memberName: new Boolean(true)
          }).toHaveTrue('memberName');
        });
      });
      describe('when false', () => {
        it('should deny', () => {
          expect({
            memberName: new Boolean(false)
          }).not.toHaveTrue('memberName');
        });
      });
    });
  });
});
