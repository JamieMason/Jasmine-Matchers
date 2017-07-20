const describeToHaveBooleanX = require('./lib/describeToHaveBooleanX');

describe('toHaveBoolean', () => {
  describeToHaveBooleanX('toHaveBoolean', () => {
    describe('when primitive', () => {
      it('should confirm', () => {
        expect({
          memberName: true
        }).toHaveBoolean('memberName');
        expect({
          memberName: false
        }).toHaveBoolean('memberName');
      });
    });
    describe('when Boolean object', () => {
      it('should confirm', () => {
        expect({
          memberName: new Boolean(true)
        }).toHaveBoolean('memberName');
        expect({
          memberName: new Boolean(false)
        }).toHaveBoolean('memberName');
      });
    });
  });
});
