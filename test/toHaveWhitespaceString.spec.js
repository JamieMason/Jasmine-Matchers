const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveWhitespaceString', () => {
  describeToHaveX('toHaveWhitespaceString', () => {
    describe('when subject IS a string containing only tabs, spaces, returns etc', () => {
      it('should confirm', () => {
        expect({
          memberName: ' '
        }).toHaveWhitespaceString('memberName');
        expect({
          memberName: ''
        }).toHaveWhitespaceString('memberName');
      });
    });
    describe('when subject is NOT a string containing only tabs, spaces, returns etc', () => {
      it('should deny', () => {
        expect({
          memberName: 'has-no-whitespace'
        }).not.toHaveWhitespaceString('memberName');
        expect({
          memberName: 'has whitespace'
        }).not.toHaveWhitespaceString('memberName');
        expect({
          memberName: null
        }).not.toHaveWhitespaceString('memberName');
      });
    });
  });
});
