const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveEmptyObject', () => {
  let Foo;
  beforeEach(() => {
    Foo = function() {};
  });
  describeToHaveX('toHaveEmptyObject', () => {
    describe('when subject IS an Object with no instance members', () => {
      beforeEach(() => {
        Foo.prototype = {
          b: 2
        };
      });
      it('should confirm', () => {
        expect({
          memberName: new Foo()
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
