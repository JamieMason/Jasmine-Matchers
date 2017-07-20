describe('toBeObject', () => {
  beforeEach(function () {
    this.Foo = function () {};
  });
  describe('when invoked', () => {
    describe('when subject IS an Object', () => {
      it('should confirm', function () {
        expect(new Object()).toBeObject();
        expect(new this.Foo()).toBeObject();
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
