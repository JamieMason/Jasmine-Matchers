describe('Booleans', function() {

  describe('toBeTrue', function () {
    it('asserts value is not only truthy, but a boolean true', function () {
      expect(true).toBeTrue();
      expect(1).not.toBeTrue();
    });
  });

  describe('toBeFalse', function () {
    it('asserts value is not only falsy, but a boolean false', function () {
      expect(false).toBeFalse();
      expect(1).not.toBeFalse();
    });
  });

  describe('toBeBoolean', function () {
    it('asserts value is not only truthy or falsy, but a boolean', function () {
      expect(true).toBeBoolean();
      expect(false).toBeBoolean();
      expect(1).not.toBeBoolean();
      expect(0).not.toBeBoolean();
    });
  });

});
