describe('Errors', function() {

  describe('toThrowError', function () {
    it('asserts value is a function which will error when called a particular way', function () {
      expect(function(){ throw new Error('wut?'); }).toThrowError();
      expect(function(){ return badReference.someValue }).toThrowError();
      expect(function(){}).not.toThrowError();
    });
  });

  describe('toThrowErrorOfType', function () {
    it('asserts value is a function which will throw a specific type of error when called a particular way', function () {
      expect(function(){ throw new Error('wut?'); }).toThrowErrorOfType('Error');
      expect(function(){ return badReference.someValue }).toThrowErrorOfType('ReferenceError');
    });
  });

});
