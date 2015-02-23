describe('Objects', function() {

  beforeEach(function() {
    this.Foo = function() {};
  });

  describe('toBeObject', function() {
    describe('when invoked', function() {
      describe('when subject IS an Object', function() {
        it('should confirm', function() {
          expect(new Object()).toBeObject();
          expect(new this.Foo()).toBeObject();
          expect({}).toBeObject();
        });
      });
      describe('when subject is NOT an Object', function() {
        it('should deny', function() {
          expect(null).not.toBeObject();
          expect(123).not.toBeObject();
          expect('[object Object]').not.toBeObject();
        });
      });
    });
  });

  describe('toBeEmptyObject', function() {
    describe('when invoked', function() {
      describe('when subject IS an Object with no instance members', function() {
        beforeEach(function() {
          this.Foo.prototype = {
            b: 2
          };
        });
        it('should confirm', function() {
          expect(new this.Foo()).toBeEmptyObject();
          expect({}).toBeEmptyObject();
        });
      });
      describe('when subject is NOT an Object with no instance members', function() {
        it('should deny', function() {
          expect({
            a: 1
          }).not.toBeEmptyObject();
          expect(null).not.toBeNonEmptyObject();
        });
      });
    });
  });

  describe('toBeNonEmptyObject', function() {
    describe('when invoked', function() {
      describe('when subject IS an Object with at least one instance member', function() {
        it('should confirm', function() {
          expect({
            a: 1
          }).toBeNonEmptyObject();
        });
      });
      describe('when subject is NOT an Object with at least one instance member', function() {
        beforeEach(function() {
          this.Foo.prototype = {
            b: 2
          };
        });
        it('should deny', function() {
          expect(new this.Foo()).not.toBeNonEmptyObject();
          expect({}).not.toBeNonEmptyObject();
          expect(null).not.toBeNonEmptyObject();
        });
      });
    });
  });

  describe('toImplement', function() {
    describe('when invoked', function() {
      describe('when subject IS an Object containing all of the supplied members', function() {
        it('should confirm', function() {
          expect({
            a: 1,
            b: 2
          }).toImplement({
            a: 1,
            b: 2
          });
          expect({
            a: 1,
            b: 2
          }).toImplement({
            a: 1
          });
        });
      });
      describe('when subject is NOT an Object containing all of the supplied members', function() {
        it('should deny', function() {
          expect({
            a: 1
          }).not.toImplement({
            c: 3
          });
          expect(null).not.toImplement({
            a: 1
          });
        });
      });
    });
  });

  describe('toBeFunction', function() {
    describe('when invoked', function() {
      describe('when subject IS a function', function() {
        it('should confirm', function() {
          expect(function() {}).toBeFunction();
        });
      });
      describe('when subject is NOT a function', function() {
        it('should deny', function() {
          expect(/regexp/).not.toBeFunction();
        });
      });
    });
  });

});
