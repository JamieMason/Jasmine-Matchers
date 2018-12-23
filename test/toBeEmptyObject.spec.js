describe('toBeEmptyObject', () => {
  let Foo;
  beforeEach(() => {
    Foo = function() {};
  });
  describe('when invoked', () => {
    describe('when subject IS an Object with no instance members', () => {
      beforeEach(() => {
        Foo.prototype = {
          b: 2
        };
      });
      it('should confirm', () => {
        expect(new Foo()).toBeEmptyObject();
        expect({}).toBeEmptyObject();
      });
    });
    describe('when subject is NOT an Object with no instance members', () => {
      it('should deny', () => {
        expect({
          a: 1
        }).not.toBeEmptyObject();
        expect(null).not.toBeNonEmptyObject();
      });
    });
  });
});
