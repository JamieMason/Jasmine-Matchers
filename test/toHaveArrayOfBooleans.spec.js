const describeToHaveArrayX = require('./lib/describeToHaveArrayX');

describe('toHaveArrayOfBooleans', () => {
  describeToHaveArrayX('toHaveArrayOfBooleans', () => {
    describe('when named Array is empty', () => {
      it('should confirm', () => {
        expect({
          memberName: []
        }).toHaveArrayOfBooleans('memberName');
      });
    });
    describe('when named Array has items', () => {
      describe('when all items are booleans', () => {
        it('should confirm', () => {
          expect({
            memberName: [true]
          }).toHaveArrayOfBooleans('memberName');
          expect({
            memberName: [new Boolean(true)]
          }).toHaveArrayOfBooleans('memberName');
          expect({
            memberName: [new Boolean(false)]
          }).toHaveArrayOfBooleans('memberName');
          expect({
            memberName: [false, true]
          }).toHaveArrayOfBooleans('memberName');
        });
      });
      describe('when any item is not a boolean', () => {
        it('should deny', () => {
          expect({
            memberName: [null]
          }).not.toHaveArrayOfBooleans('memberName');
          expect({
            memberName: [null, false]
          }).not.toHaveArrayOfBooleans('memberName');
        });
      });
    });
  });
});
