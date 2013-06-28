describe('Booleans', function() {

  describe('toBeTrue', function () {
    it('asserts value is not only truthy, but a boolean true', function () {
      expect(true).toBeTrue();
      expect(new Boolean(true)).toBeTrue();
      expect(1).not.toBeTrue();
    });
  });

  describe('toBeFalse', function () {
    it('asserts value is not only falsy, but a boolean false', function () {
      expect(false).toBeFalse();
      expect(new Boolean(false)).toBeFalse();
      expect(1).not.toBeFalse();
    });
  });

  describe('toBeBoolean', function () {
    it('asserts value is not only truthy or falsy, but a boolean', function () {
      expect(true).toBeBoolean();
      expect(false).toBeBoolean();
      expect(new Boolean(true)).toBeBoolean();
      expect(new Boolean(false)).toBeBoolean();
      expect(1).not.toBeBoolean();
      expect(0).not.toBeBoolean();
    });
  });

});
