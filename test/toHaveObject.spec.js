const describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveObject', () => {
  describeToHaveX('toHaveObject', () => {
    let Foo;
    beforeEach(() => {
      Foo = function() {};
    });
    describe('when subject IS an Object', () => {
      it('should confirm', () => {
        expect({
          memberName: new Object()
        }).toHaveObject('memberName');
        expect({
          memberName: new Foo()
        }).toHaveObject('memberName');
        expect({
          memberName: {}
        }).toHaveObject('memberName');
      });
    });
    describe('when subject is NOT an Object', () => {
      it('should deny', () => {
        expect({
          memberName: null
        }).not.toHaveObject('memberName');
        expect({
          memberName: 123
        }).not.toHaveObject('memberName');
        expect({
          memberName: '[object Object]'
        }).not.toHaveObject('memberName');
      });
    });
  });
});
