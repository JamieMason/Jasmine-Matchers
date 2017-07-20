const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveEmptyObject', () => {
  beforeEach(function () {
    this.Foo = function () {};
  });
  describeToHaveX('toHaveEmptyObject', () => {
    describe('when subject IS an Object with no instance members', () => {
      beforeEach(function () {
        this.Foo.prototype = {
          b: 2
        };
      });
      it('should confirm', function () {
        expect({
          memberName: new this.Foo()
        }).toHaveEmptyObject('memberName');
        expect({
          memberName: {}
        }).toHaveEmptyObject('memberName');
      });
    });
    describe('when subject is NOT an Object with no instance members', () => {
      it('should deny', () => {
        expect({
          memberName: {
            a: 1
          }
        }).not.toHaveEmptyObject('memberName');
        expect({
          memberName: null
        }).not.toHaveNonEmptyObject('memberName');
      });
    });
  });
});
