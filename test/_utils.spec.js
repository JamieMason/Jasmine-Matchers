if (typeof process === 'object') {
  require(process.env.PWD + '/dist/jasmine-matchers');
}

function getArgumentsObject() {
  return (function() {
    return arguments;
  }(1, 2, 3));
}

function getArrayLikeObject() {
  return {
    0: 1,
    1: 2,
    2: 3
  };
}

function describeWhenNotArray(toBeArraymemberName) {
  describe('when subject is not a true Array', function() {
    describe('when subject is Array-like', function() {
      it('should deny', function() {
        expect(getArgumentsObject()).not[toBeArraymemberName]();
        expect(getArrayLikeObject()).not[toBeArraymemberName]();
      });
    });
    describe('when subject is not Array-like', function() {
      it('should deny', function() {
        expect({}).not[toBeArraymemberName]();
        expect(null).not[toBeArraymemberName]();
        expect(void(0)).not[toBeArraymemberName]();
        expect(true).not[toBeArraymemberName]();
        expect(false).not[toBeArraymemberName]();
        expect(Array).not[toBeArraymemberName]();
      });
    });
  });
}

function describeToBeArrayOfX(options) {
  describe(options.name, function() {
    describe('when invoked', function() {
      describe('when subject is a true Array', function() {
        describe('when subject has no members', function() {
          it('should confirm (an empty array of ' + options.type + 's is valid)', function() {
            expect([])[options.name]();
          });
        });
        describe('when subject has members', function() {
          describe('when subject has a mix of ' + options.type + 's and other items', function() {
            it('should deny', options.whenMixed);
          });
          describe('when subject has only ' + options.type + 's', function() {
            it('should confirm', options.whenValid);
          });
          describe('when subject has other items', function() {
            it('should deny', options.whenInvalid);
          });
        });
      });
      describeWhenNotArray(options.name);
    });
  });
}

function describeToHaveX(options) {
  describe(options.name, function() {
    describe('when invoked', function() {
      describe('when subject is not an object', function() {
        it('should deny', function() {
          expect(0).not[options.name]('memberName');
          expect(null).not[options.name]('memberName');
          expect(true).not[options.name]('memberName');
          expect(false).not[options.name]('memberName');
          expect('').not[options.name]('memberName');
        });
      });
      describe('when subject is an object', function() {
        describe('when member is not present', function() {
          it('should deny', function() {
            expect({}).not[options.name]('memberName');
          });
        });
        describe('when member is present', function() {
          options.whenPresent();
        });
      });
    });
  });
}

function describeToHaveArrayX(options) {
  describeToHaveX({
    name: options.name,
    whenPresent: function() {
      describe('when member is an array', options.whenArray);
    }
  });
}

function describeToHaveBooleanX(options) {
  describeToHaveX({
    name: options.name,
    whenPresent: function() {
      describe('when member is truthy', function() {
        it('should deny', function() {
          expect({
            memberName: 1
          }).not[options.name]('memberName');
          expect({
            memberName: 'true'
          }).not[options.name]('memberName');
        });
      });
      describe('when member is falsy', function() {
        it('should deny', function() {
          expect({
            memberName: 0
          }).not[options.name]('memberName');
          expect({
            memberName: ''
          }).not[options.name]('memberName');
        });
      });
      describe('when member is boolean', options.whenBoolean);
    }
  });
}
