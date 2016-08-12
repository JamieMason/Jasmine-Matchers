// modules
var describeToHaveX = require('./lib/describeToHaveX');

// spec
describe('toHaveString', function () {
  describeToHaveX('toHaveString', function () {
    describe('when subject IS a string of any length', function () {
      it('should confirm', function () {
        expect({
          memberName: ''
        }).toHaveString('memberName');
        expect({
          memberName: ' '
        }).toHaveString('memberName');
      });
    });
    describe('when subject is NOT a string of any length', function () {
      it('should deny', function () {
        expect({
          memberName: null
        }).not.toHaveString('memberName');
      });
    });
  });
});
