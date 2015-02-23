describe('Booleans', function() {

  describe('toBeTrue', function() {
    describe('when invoked', function() {
      describe('when subject is not only truthy, but a boolean true', function() {
        it('should confirm', function() {
          expect(true).toBeTrue();
          expect(new Boolean(true)).toBeTrue();
        });
      });
      describe('when subject is truthy', function() {
        it('should deny', function() {
          expect(1).not.toBeTrue();
        });
      });
    });
  });

  describe('toBeFalse', function() {
    describe('when invoked', function() {
      describe('when subject is not only falsy, but a boolean false', function() {
        it('should confirm', function() {
          expect(false).toBeFalse();
          expect(new Boolean(false)).toBeFalse();
        });
      });
      describe('when subject is falsy', function() {
        it('should deny', function() {
          expect(1).not.toBeFalse();
        });
      });
    });
  });

  describe('toBeBoolean', function() {
    describe('when invoked', function() {
      describe('when subject not only truthy or falsy, but a boolean', function() {
        it('should confirm', function() {
          expect(true).toBeBoolean();
          expect(false).toBeBoolean();
          expect(new Boolean(true)).toBeBoolean();
          expect(new Boolean(false)).toBeBoolean();
        });
      });
      describe('when subject is truthy or falsy', function() {
        it('should deny', function() {
          expect(1).not.toBeBoolean();
          expect(0).not.toBeBoolean();
        });
      });
    });
  });

});
