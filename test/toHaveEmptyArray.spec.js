const describeToHaveArrayX = require('./lib/describeToHaveArrayX');

describe('toHaveEmptyArray', () => {
  describeToHaveArrayX('toHaveEmptyArray', () => {
    describe('when named array has members', () => {
      it('should deny', () => {
        expect({
          memberName: [1, 2, 3]
        }).not.toHaveEmptyArray('memberName');
        expect({
          memberName: ''
        }).not.toHaveEmptyArray('memberName');
      });
    });
    describe('when named array has no members', () => {
      it('should confirm', () => {
        expect({
          memberName: []
        }).toHaveEmptyArray('memberName');
      });
    });
  });
});
