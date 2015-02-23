describe('Object Members', function() {

  beforeEach(function() {
    this.Foo = function() {};
  });

  describeToHaveX({
    name: 'toHaveObject',
    whenPresent: function() {
      describe('when subject IS an Object', function() {
        it('should confirm', function() {
          expect({
            memberName: new Object()
          }).toHaveObject('memberName');
          expect({
            memberName: new this.Foo()
          }).toHaveObject('memberName');
          expect({
            memberName: {}
          }).toHaveObject('memberName');
        });
      });
      describe('when subject is NOT an Object', function() {
        it('should deny', function() {
          expect({
            memberName: null
          }).not.toHaveObject('memberName');
          expect({
            memberName: 123
          }).not.toHaveObject('memberName');
          expect({
            memberName: '[object Object]'
          }).not.toHaveObject('memberName');
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveEmptyObject',
    whenPresent: function() {
      describe('when subject IS an Object with no instance members', function() {
        beforeEach(function() {
          this.Foo.prototype = {
            b: 2
          };
        });
        it('should confirm', function() {
          expect({
            memberName: new this.Foo()
          }).toHaveEmptyObject('memberName');
          expect({
            memberName: {}
          }).toHaveEmptyObject('memberName');
        });
      });
      describe('when subject is NOT an Object with no instance members', function() {
        it('should deny', function() {
          expect({
            memberName: {
              a: 1
            }
          }).not.toHaveEmptyObject('memberName');
          expect({
            memberName: null
          }).not.toHaveNonEmptyObject('memberName');
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveNonEmptyObject',
    whenPresent: function() {
      describe('when subject IS an Object with at least one instance member', function() {
        it('should confirm', function() {
          expect({
            memberName: {
              a: 1
            }
          }).toHaveNonEmptyObject('memberName');
        });
      });
      describe('when subject is NOT an Object with at least one instance member', function() {
        beforeEach(function() {
          this.Foo.prototype = {
            b: 2
          };
        });
        it('should deny', function() {
          expect({
            memberName: new this.Foo()
          }).not.toHaveNonEmptyObject('memberName');
          expect({
            memberName: {}
          }).not.toHaveNonEmptyObject('memberName');
          expect({
            memberName: null
          }).not.toHaveNonEmptyObject('memberName');
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveMember',
    whenPresent: function() {

    }
  });

  describeToHaveX({
    name: 'toHaveMethod',
    whenPresent: function() {
      describe('when subject IS a function', function() {
        it('should confirm', function() {
          expect({
            memberName: function() {}
          }).toHaveMethod('memberName');
        });
      });
      describe('when subject is NOT a function', function() {
        it('should deny', function() {
          expect({
            memberName: /regexp/
          }).not.toHaveMethod('memberName');
        });
      });
    }
  });

});
