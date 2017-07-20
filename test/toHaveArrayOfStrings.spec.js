const describeToHaveArrayX = require('./lib/describeToHaveArrayX');

describe('toHaveArrayOfStrings', () => {
  describeToHaveArrayX('toHaveArrayOfStrings', () => {
    describe('when named Array is empty', () => {
      it('should confirm', () => {
        expect({
          memberName: []
        }).toHaveArrayOfStrings('memberName');
      });
    });
    describe('when named Array has items', () => {
      describe('when all items are strings', () => {
        it('should confirm', () => {
          expect({
            memberName: ['truthy']
          }).toHaveArrayOfStrings('memberName');
          expect({
            memberName: [new String('truthy')]
          }).toHaveArrayOfStrings('memberName');
          expect({
            memberName: [new String('')]
          }).toHaveArrayOfStrings('memberName');
          expect({
            memberName: ['', 'truthy']
          }).toHaveArrayOfStrings('memberName');
        });
      });
      describe('when any item is not a string', () => {
        it('should deny', () => {
          expect({
            memberName: [null]
          }).not.toHaveArrayOfStrings('memberName');
          expect({
            memberName: [null, '']
          }).not.toHaveArrayOfStrings('memberName');
        });
      });
    });
  });
});
