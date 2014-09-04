describe('Errors', function() {

  describe('toThrowAnyError', function () {
    it('asserts value is a function which will error when called a particular way', function () {
      expect(function(){ throw new Error('wut?'); }).toThrowAnyError();
      expect(function(){ return badReference.someValue }).toThrowAnyError();
      expect(function(){}).not.toThrowAnyError();
    });
  });

  describe('toThrowErrorOfType', function () {
    it('asserts value is a function which will throw a specific type of error when called a particular way', function () {
      expect(function(){ throw new Error('wut?'); }).toThrowErrorOfType('Error');
      expect(function(){ return badReference.someValue }).toThrowErrorOfType('ReferenceError');
    });
  });

});
