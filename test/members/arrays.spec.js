describe('Array Members', function() {

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
      describe('when named array has members', function() {
        it('should deny', function() {
          expect({
            memberName: [1, 2, 3]
          }).not.toHaveEmptyArray('memberName');
          expect({
            memberName: ''
          }).not.toHaveEmptyArray('memberName');
        });
      });
      describe('when named array has no members', function() {
        it('should confirm', function() {
          expect({
            memberName: []
          }).toHaveEmptyArray('memberName');
        });
      });
    }
  });

  describeToHaveArrayX({
    name: 'toHaveNonEmptyArray',
    whenArray: function() {
      describe('when named array has no members', function() {
        it('should deny', function() {
          expect({
            memberName: []
          }).not.toHaveNonEmptyArray('memberName');
        });
      });
      describe('when named array has members', function() {
        it('should confirm', function() {
          expect({
            memberName: [1, 2, 3]
          }).toHaveNonEmptyArray('memberName');
        });
      });
    }
  });

  describeToHaveArrayX({
    name: 'toHaveArrayOfObjects',
    whenArray: function() {
      describe('when named Array is empty', function() {
        it('should confirm', function() {
          expect({
            memberName: []
          }).toHaveArrayOfObjects('memberName');
        });
      });
      describe('when named Array has items', function() {
        describe('when all items are objects', function() {
          it('should confirm', function() {
            expect({
              memberName: [{}]
            }).toHaveArrayOfObjects('memberName');
            expect({
              memberName: [{}, {}]
            }).toHaveArrayOfObjects('memberName');
          });
        });
        describe('when any item is not an object', function() {
          it('should deny', function() {
            expect({
              memberName: [null]
            }).not.toHaveArrayOfObjects('memberName');
            expect({
              memberName: [null, {}]
            }).not.toHaveArrayOfObjects('memberName');
          });
        });
      });
    }
  });

  describeToHaveArrayX({
    name: 'toHaveArrayOfStrings',
    whenArray: function() {
      describe('when named Array is empty', function() {
        it('should confirm', function() {
          expect({
            memberName: []
          }).toHaveArrayOfStrings('memberName');
        });
      });
      describe('when named Array has items', function() {
        describe('when all items are strings', function() {
          it('should confirm', function() {
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
          });
        });
        describe('when any item is not a string', function() {
          it('should deny', function() {
            expect({
              memberName: [null]
            }).not.toHaveArrayOfStrings('memberName');
            expect({
              memberName: [null, '']
            }).not.toHaveArrayOfStrings('memberName');
          });
        });
      });
    }
  });

  describeToHaveArrayX({
    name: 'toHaveArrayOfNumbers',
    whenArray: function() {
      describe('when named Array is empty', function() {
        it('should confirm', function() {
          expect({
            memberName: []
          }).toHaveArrayOfNumbers('memberName');
        });
      });
      describe('when named Array has items', function() {
        describe('when all items are numbers', function() {
          it('should confirm', function() {
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
          });
        });
        describe('when any item is not a number', function() {
          it('should deny', function() {
            expect({
              memberName: [null]
            }).not.toHaveArrayOfNumbers('memberName');
            expect({
              memberName: [null, 0]
            }).not.toHaveArrayOfNumbers('memberName');
          });
        });
      });
    }
  });

  describeToHaveArrayX({
    name: 'toHaveArrayOfBooleans',
    whenArray: function() {
      describe('when named Array is empty', function() {
        it('should confirm', function() {
          expect({
            memberName: []
          }).toHaveArrayOfBooleans('memberName');
        });
      });
      describe('when named Array has items', function() {
        describe('when all items are booleans', function() {
          it('should confirm', function() {
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
          });
        });
        describe('when any item is not a boolean', function() {
          it('should deny', function() {
            expect({
              memberName: [null]
            }).not.toHaveArrayOfBooleans('memberName');
            expect({
              memberName: [null, false]
            }).not.toHaveArrayOfBooleans('memberName');
          });
        });
      });
    }
  });

});
