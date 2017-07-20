const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveNonEmptyObject', () => {
  describeToHaveX('toHaveNonEmptyObject', () => {
    beforeEach(function () {
      this.Foo = function () {};
    });
    describe('when subject IS an Object with at least one instance member', () => {
      it('should confirm', () => {
        expect({
          memberName: {
            a: 1
          }
        }).toHaveNonEmptyObject('memberName');
      });
    });
    describe('when subject is NOT an Object with at least one instance member', () => {
      beforeEach(function () {
        this.Foo.prototype = {
          b: 2
        };
      });
      it('should deny', function () {
        expect({
          memberName: new this.Foo()
        }).not.toHaveNonEmptyObject('memberName');
        expect({
          memberName: {}
        }).not.toHaveNonEmptyObject('memberName');
        expect({
          memberName: null
        }).not.toHaveNonEmptyObject('memberName');
      });
    });
  });
});
