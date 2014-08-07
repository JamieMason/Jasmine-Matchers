describe('Errors', function() {

  describe('toThrowError', function() {
    describe('when supplied a function', function() {
      describe('when function errors when invoked', function() {
        beforeEach(function() {
          this.throwError = function() {
            throw new Error('wut?');
          };
          this.badReference = function() {
            return badReference.someValue
          };
        });
        it('should confirm', function() {
          expect(this.throwError).toThrowError();
          expect(this.badReference).toThrowError();
        });
      });
      describe('when function does NOT error when invoked', function() {
        beforeEach(function() {
          this.noErrors = function() {};
        });
        it('should deny', function() {
          expect(this.noErrors).not.toThrowError();
        });
      });
    });
  });

  describe('toThrowErrorOfType', function() {
    describe('when supplied a function', function() {
      describe('when function errors when invoked', function() {
        beforeEach(function() {
          this.throwError = function() {
            throw new Error('wut?');
          };
          this.badReference = function() {
            return badReference.someValue
          };
        });
        describe('when the error is of the expected type', function() {
          it('should confirm', function() {
            expect(this.throwError).toThrowErrorOfType('Error');
            expect(this.badReference).toThrowErrorOfType('ReferenceError');
          });
        });
        describe('when the error is NOT of the expected type', function() {
          it('should confirm', function() {
            expect(this.throwError).not.toThrowErrorOfType('ReferenceError');
            expect(this.badReference).not.toThrowErrorOfType('Error');
          });
        });
      });
    });
  });

});
