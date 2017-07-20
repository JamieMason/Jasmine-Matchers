const describeToHaveX = require('./describeToHaveX');

module.exports = function describeToHaveBooleanX(name, whenBoolean) {
  describeToHaveX(name, () => {
    describe('when member is truthy', () => {
      it('should deny', () => {
        expect({
          memberName: 1
        }).not[name]('memberName');
        expect({
          memberName: 'true'
        }).not[name]('memberName');
      });
    });
    describe('when member is falsy', () => {
      it('should deny', () => {
        expect({
          memberName: 0
        }).not[name]('memberName');
        expect({
          memberName: ''
        }).not[name]('memberName');
      });
    });
    describe('when member is boolean', whenBoolean);
  });
};
