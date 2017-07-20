const describeToHaveArrayX = require('./lib/describeToHaveArrayX');

describe('toHaveArrayOfNumbers', () => {
  describeToHaveArrayX('toHaveArrayOfNumbers', () => {
    describe('when named Array is empty', () => {
      it('should confirm', () => {
        expect({
          memberName: []
        }).toHaveArrayOfNumbers('memberName');
      });
    });
    describe('when named Array has items', () => {
      describe('when all items are numbers', () => {
        it('should confirm', () => {
          expect({
            memberName: [1]
          }).toHaveArrayOfNumbers('memberName');
          expect({
            memberName: [new Number(1)]
          }).toHaveArrayOfNumbers('memberName');
          expect({
            memberName: [new Number(0)]
          }).toHaveArrayOfNumbers('memberName');
          expect({
            memberName: [0, 1]
          }).toHaveArrayOfNumbers('memberName');
        });
      });
      describe('when any item is not a number', () => {
        it('should deny', () => {
          expect({
            memberName: [null]
          }).not.toHaveArrayOfNumbers('memberName');
          expect({
            memberName: [null, 0]
          }).not.toHaveArrayOfNumbers('memberName');
        });
      });
    });
  });
});
