const describeToHaveArrayX = require('./lib/describeToHaveArrayX');

describe('toHaveNonEmptyArray', () => {
  describeToHaveArrayX('toHaveNonEmptyArray', () => {
    describe('when named array has no members', () => {
      it('should deny', () => {
        expect({
          memberName: []
        }).not.toHaveNonEmptyArray('memberName');
      });
    });
    describe('when named array has members', () => {
      it('should confirm', () => {
        expect({
          memberName: [1, 2, 3]
        }).toHaveNonEmptyArray('memberName');
      });
    });
  });
});
