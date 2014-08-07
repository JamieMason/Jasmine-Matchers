describe('Objects', function() {

  describe('toBeObject', function() {
    it('should assert value is an Object', function() {
      function Foo(){}
      expect(new Foo()).toBeObject();
      expect({}).toBeObject();
      expect(null).not.toBeObject();
    });
  });

  describe('toBeEmptyObject', function() {
    it('should assert value is an Object with no instance members', function() {
      function Foo(){}
      Foo.prototype = { b: 2 };
      expect({ a: 1 }).not.toBeEmptyObject();
      expect(new Foo()).toBeEmptyObject();
      expect({}).toBeEmptyObject();
      expect(null).not.toBeNonEmptyObject();
    });
  });

  describe('toBeNonEmptyObject', function() {
    it('should assert value is an Object with at least one instance member', function() {
      function Foo(){}
      Foo.prototype = { b: 2 };
      expect({ a: 1 }).toBeNonEmptyObject();
      expect(new Foo()).not.toBeNonEmptyObject();
      expect({}).not.toBeNonEmptyObject();
      expect(null).not.toBeNonEmptyObject();
    });
  });

  describe('toImplement', function() {
    it('should assert value is an Object containing all of the supplied members', function() {
      expect({ a: 1, b: 2 }).toImplement({ a: 1, b: 2 });
      expect({ a: 1, b: 2 }).toImplement({ a: 1 });
      expect({ a: 1 }).not.toImplement({ c: 3 });
      expect(null).not.toImplement({ a: 1 });
    });
  });

  describe('toBeFunction', function() {
    it('should assert value is a function', function() {
      expect(function(){}).toBeFunction();
      expect(/regexp/).not.toBeFunction();
    });
  });

});
