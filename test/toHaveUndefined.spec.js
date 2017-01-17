// modules
var describeToHaveX = require('./lib/describeToHaveX');

// spec
describe('toHaveUndefined', function () {
  describeToHaveX('toHaveUndefined', function () {
    describe('when subject does NOT have a member at the given key', () => {
      it('should deny', function () {
        expect({}).not.toHaveUndefined('memberName');
        expect(null).not.toHaveUndefined('memberName');
      });
    });
    describe('when subject DOES have a member at the given key', () => {
      describe('when subject IS undefined', function () {
        it('should confirm', function () {
          expect({
            memberName: undefined
          }).toHaveUndefined('memberName');
        });
      });
      describe('when subject is NOT undefined', function () {
        it('should deny', function () {
          expect({
            memberName: null
          }).not.toHaveUndefined('memberName');
          expect({
            memberName: 'undefined'
          }).not.toHaveUndefined('memberName');
        });
      });
    });
  });
});
