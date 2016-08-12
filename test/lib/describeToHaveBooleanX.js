// modules
var describeToHaveX = require('./describeToHaveX');

// public
module.exports = function describeToHaveBooleanX(name, whenBoolean) {
  describeToHaveX(name, function () {
    describe('when member is truthy', function () {
      it('should deny', function () {
        expect({
          memberName: 1
        }).not[name]('memberName');
        expect({
          memberName: 'true'
        }).not[name]('memberName');
      });
    });
    describe('when member is falsy', function () {
      it('should deny', function () {
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
