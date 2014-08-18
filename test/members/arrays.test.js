describe('Array Members', function() {

  function describeToHaveArrayX(options) {
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
            describe('when member is not an array', function() {
              it('should deny', function() {
                expect({
                  memberName: ''
                }).not[options.name]('memberName');
                expect({
                  a: []
                }).not[options.name]('b');
                expect({
                  a: null
                }).not[options.name]('b');
              });
            });
            describe('when member is an array', options.whenArray);
          });
        });
      });
    });
  }

  describeToHaveArrayX({
    name: 'toHaveArray',
    whenArray: function() {
      it('should confirm', function() {
        expect({
          memberName: []
        }).toHaveArray('memberName');
        expect({
          memberName: [1, 2, 3]
        }).toHaveArray('memberName');
      });
    }
  });

  describeToHaveArrayX({
    name: 'toHaveArrayOfSize',
    whenArray: function() {
      describe('when number of expected items does not match', function() {
        it('should deny', function() {
          expect({
            memberName: ''
          }).not.toHaveArrayOfSize('memberName');
          expect({
            memberName: ['bar']
          }).not.toHaveArrayOfSize('memberName', 0);
        });
      });
      describe('when number of expected items does match', function() {
        it('should confirm', function() {
          expect({
            memberName: []
          }).toHaveArrayOfSize('memberName', 0);
          expect({
            memberName: ['bar']
          }).toHaveArrayOfSize('memberName', 1);
          expect({
            memberName: ['bar', 'baz']
          }).toHaveArrayOfSize('memberName', 2);
        });
      });
    }
  });

  describeToHaveArrayX({
    name: 'toHaveEmptyArray',
    whenArray: function() {
      it('should assert subject is an Object with a member of name that is an Array with no members', function() {
        expect({
          memberName: []
        }).toHaveEmptyArray('memberName');
        expect({
          memberName: [1, 2, 3]
        }).not.toHaveEmptyArray('memberName');
        expect({
          memberName: ''
        }).not.toHaveEmptyArray('memberName');
        expect(null).not.toHaveEmptyArray('memberName');
      });
    }
  });

  describeToHaveArrayX({
    name: 'toHaveArrayOfObjects',
    whenArray: function() {
      describe('when named Array is empty', function() {
        it('should return true since an empty array of Objects is valid', function() {
          expect({
            memberName: []
          }).toHaveArrayOfObjects('memberName');
        });
      });
      describe('when named Array has items', function() {
        it('should assert all items are Objects', function() {
          expect({
            memberName: [{}]
          }).toHaveArrayOfObjects('memberName');
          expect({
            memberName: [{}, {}]
          }).toHaveArrayOfObjects('memberName');
          expect({
            memberName: [null]
          }).not.toHaveArrayOfObjects('memberName');
          expect({
            memberName: [null, {}]
          }).not.toHaveArrayOfObjects('memberName');
        });
      });
    }
  });

  describeToHaveArrayX({
    name: 'toHaveArrayOfStrings',
    whenArray: function() {
      describe('when named Array is empty', function() {
        it('should return true since an empty array of Strings is valid', function() {
          expect({
            memberName: []
          }).toHaveArrayOfStrings('memberName');
        });
      });
      describe('when named Array has items', function() {
        it('should assert all items are Strings', function() {
          expect({
            memberName: ['truthy']
          }).toHaveArrayOfStrings('memberName');
          expect({
            memberName: [new String('truthy')]
          }).toHaveArrayOfStrings('memberName');
          expect({
            memberName: [new String('')]
          }).toHaveArrayOfStrings('memberName');
          expect({
            memberName: ['', 'truthy']
          }).toHaveArrayOfStrings('memberName');
          expect({
            memberName: [null]
          }).not.toHaveArrayOfStrings('memberName');
          expect({
            memberName: [null, '']
          }).not.toHaveArrayOfStrings('memberName');
        });
      });
    }
  });

  describeToHaveArrayX({
    name: 'toHaveArrayOfNumbers',
    whenArray: function() {
      describe('when named Array is empty', function() {
        it('should return true since an empty array of Numbers is valid', function() {
          expect({
            memberName: []
          }).toHaveArrayOfNumbers('memberName');
        });
      });
      describe('when named Array has items', function() {
        it('should assert all items are Numbers', function() {
          expect({
            memberName: [1]
          }).toHaveArrayOfNumbers('memberName');
          expect({
            memberName: [new Number(1)]
          }).toHaveArrayOfNumbers('memberName');
          expect({
            memberName: [new Number(0)]
          }).toHaveArrayOfNumbers('memberName');
          expect({
            memberName: [0, 1]
          }).toHaveArrayOfNumbers('memberName');
          expect({
            memberName: [null]
          }).not.toHaveArrayOfNumbers('memberName');
          expect({
            memberName: [null, 0]
          }).not.toHaveArrayOfNumbers('memberName');
        });
      });
    }
  });

  describeToHaveArrayX({
    name: 'toHaveArrayOfBooleans',
    whenArray: function() {
      describe('when named Array is empty', function() {
        it('should return true since an empty array of Booleans is valid', function() {
          expect({
            memberName: []
          }).toHaveArrayOfBooleans('memberName');
        });
      });
      describe('when named Array has items', function() {
        it('should assert all items are Booleans', function() {
          expect({
            memberName: [true]
          }).toHaveArrayOfBooleans('memberName');
          expect({
            memberName: [new Boolean(true)]
          }).toHaveArrayOfBooleans('memberName');
          expect({
            memberName: [new Boolean(false)]
          }).toHaveArrayOfBooleans('memberName');
          expect({
            memberName: [false, true]
          }).toHaveArrayOfBooleans('memberName');
          expect({
            memberName: [null]
          }).not.toHaveArrayOfBooleans('memberName');
          expect({
            memberName: [null, false]
          }).not.toHaveArrayOfBooleans('memberName');
        });
      });
    }
  });

  xdescribe('toHaveNonEmptyArray', function() {

  });

});
