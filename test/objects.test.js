describe('Objects', function() {

  describe('toBeObject', function () {
    it('asserts value is an Object', function () {
      function Foo(){}
      expect(new Foo()).toBeObject();
      expect({}).toBeObject();
      expect(null).not.toBeObject();
    });
  });

  describe('toImplement', function () {
    it('asserts value is an Object containing all of the supplied members', function () {
      expect({ a: 1, b: 2 }).toImplement({ a: 1, b: 2 });
      expect({ a: 1, b: 2 }).toImplement({ a: 1 });
      expect({ a: 1 }).not.toImplement({ c: 3 });
      expect(null).not.toImplement({ a: 1 });
    });
  });

  describe('toBeFunction', function () {
    it('asserts value is a function', function () {
      expect(function(){}).toBeFunction();
      expect(/regexp/).not.toBeFunction();
    });
  });

});
