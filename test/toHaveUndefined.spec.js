const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveUndefined', () => {
  describeToHaveX('toHaveUndefined', () => {
    describe('when subject does NOT have a member at the given key', () => {
      it('should deny', () => {
        expect({}).not.toHaveUndefined('memberName');
        expect(null).not.toHaveUndefined('memberName');
      });
    });
    describe('when subject DOES have a member at the given key', () => {
      describe('when subject IS undefined', () => {
        it('should confirm', () => {
          expect({
            memberName: undefined
          }).toHaveUndefined('memberName');
        });
      });
      describe('when subject is NOT undefined', () => {
        it('should deny', () => {
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
