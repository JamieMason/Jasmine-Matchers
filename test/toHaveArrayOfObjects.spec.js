const describeToHaveArrayX = require('./lib/describeToHaveArrayX');

describe('toHaveArrayOfObjects', () => {
  describeToHaveArrayX('toHaveArrayOfObjects', () => {
    describe('when named Array is empty', () => {
      it('should confirm', () => {
        expect({
          memberName: []
        }).toHaveArrayOfObjects('memberName');
      });
    });
    describe('when named Array has items', () => {
      describe('when all items are objects', () => {
        it('should confirm', () => {
          expect({
            memberName: [{}]
          }).toHaveArrayOfObjects('memberName');
          expect({
            memberName: [{}, {}]
          }).toHaveArrayOfObjects('memberName');
        });
      });
      describe('when any item is not an object', () => {
        it('should deny', () => {
          expect({
            memberName: [null]
          }).not.toHaveArrayOfObjects('memberName');
          expect({
            memberName: [null, {}]
          }).not.toHaveArrayOfObjects('memberName');
        });
      });
    });
  });
});
