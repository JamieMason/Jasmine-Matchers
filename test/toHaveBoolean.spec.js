// modules
var describeToHaveBooleanX = require('./lib/describeToHaveBooleanX');

// spec
describe('toHaveBoolean', function () {
  describeToHaveBooleanX('toHaveBoolean', function () {
    describe('when primitive', function () {
      it('should confirm', function () {
        expect({
          memberName: true
        }).toHaveBoolean('memberName');
        expect({
          memberName: false
        }).toHaveBoolean('memberName');
      });
    });
    describe('when Boolean object', function () {
      it('should confirm', function () {
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
