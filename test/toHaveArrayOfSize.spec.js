const describeToHaveArrayX = require('./lib/describeToHaveArrayX');

describe('toHaveArrayOfSize', () => {
  describeToHaveArrayX('toHaveArrayOfSize', () => {
    describe('when number of expected items does not match', () => {
      it('should deny', () => {
        expect({
          memberName: ''
        }).not.toHaveArrayOfSize('memberName');
        expect({
          memberName: ['bar']
        }).not.toHaveArrayOfSize('memberName', 0);
      });
    });
    describe('when number of expected items does match', () => {
      it('should confirm', () => {
        expect({
          memberName: []
        }).toHaveArrayOfSize('memberName', 0);
        expect({
          memberName: ['bar']
        }).toHaveArrayOfSize('memberName', 1);
        expect({
          memberName: ['bar', 'baz']
        }).toHaveArrayOfSize('memberName', 2);
      });
    });
  });
});
