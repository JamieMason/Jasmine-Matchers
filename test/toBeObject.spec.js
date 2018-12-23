describe('toBeObject', () => {
  let Foo;
  beforeEach(() => {
    Foo = function() {};
  });
  describe('when invoked', () => {
    describe('when subject IS an Object', () => {
      it('should confirm', () => {
        expect(new Object()).toBeObject();
        expect(new Foo()).toBeObject();
        expect({}).toBeObject();
      });
    });
    describe('when subject is NOT an Object', () => {
      it('should deny', () => {
        expect(null).not.toBeObject();
        expect(123).not.toBeObject();
        expect('[object Object]').not.toBeObject();
      });
    });
  });
});
