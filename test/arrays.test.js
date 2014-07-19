describe('Arrays', function() {

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

  describe('toBeArray', function() {
    describe('when invoked', function() {
      describe('when subject is a true Array', function() {
        it('should confirm', function() {
          expect([]).toBeArray();
          expect(new Array()).toBeArray();
        });
      });
      describeWhenNotArray('toBeArray');
    });
  });

  describe('toBeArrayOfSize', function() {
    describe('when invoked', function() {
      describe('when subject is a true Array', function() {
        describe('when subject has the expected number of members', function() {
          it('should confirm', function() {
            expect([]).toBeArrayOfSize(0);
            expect([null]).toBeArrayOfSize(1);
            expect([false, false]).toBeArrayOfSize(2);
            expect([void(0), void(0)]).toBeArrayOfSize(2);
          });
        });
        describe('when subject has an unexpected number of members', function() {
          it('should deny', function() {
            expect([]).not.toBeArrayOfSize(1);
            expect([null]).not.toBeArrayOfSize(0);
            expect([true, true]).not.toBeArrayOfSize(1);
          });
        });
      });
      describeWhenNotArray('toBeArrayOfSize');
    });
  });

  describe('toBeEmptyArray', function() {
    describe('when invoked', function() {
      describe('when subject is a true Array', function() {
        describe('when subject has members', function() {
          it('should confirm', function() {
            expect([]).toBeEmptyArray();
          });
        });
        describe('when subject has no members', function() {
          it('should deny', function() {
            expect([null]).not.toBeEmptyArray();
            expect(['']).not.toBeEmptyArray();
            expect([1]).not.toBeEmptyArray();
            expect([true]).not.toBeEmptyArray();
            expect([false]).not.toBeEmptyArray();
          });
        });
      });
      describeWhenNotArray('toBeEmptyArray');
    });
  });

  describe('toBeNonEmptyArray', function() {
    describe('when invoked', function() {
      describe('when subject is a true Array', function() {
        describe('when subject has members', function() {
          it('should confirm', function() {
            expect([null]).toBeNonEmptyArray();
            expect([void(0)]).toBeNonEmptyArray();
            expect(['']).toBeNonEmptyArray();
          });
        });
        describe('when subject has no members', function() {
          it('should deny', function() {
            expect([]).not.toBeNonEmptyArray();
          });
        });
      });
      describeWhenNotArray('toBeNonEmptyArray');
    });
  });

  describeToBeArrayOfX({
    name: 'toBeArrayOfObjects',
    type: 'Object',
    whenValid: function() {
      expect([{}, {}]).toBeArrayOfObjects();
    },
    whenInvalid: function() {
      expect([null]).not.toBeArrayOfObjects();
      expect(['Object']).not.toBeArrayOfObjects();
      expect(['[object Object]']).not.toBeArrayOfObjects();
    },
    whenMixed: function() {
      expect([null, {}]).not.toBeArrayOfObjects();
    }
  });

  describeToBeArrayOfX({
    name: 'toBeArrayOfStrings',
    type: 'String',
    whenValid: function() {
      expect(['truthy']).toBeArrayOfStrings();
      expect([new String('truthy')]).toBeArrayOfStrings();
      expect([new String('')]).toBeArrayOfStrings();
      expect(['', 'truthy']).toBeArrayOfStrings();
    },
    whenInvalid: function() {
      expect([null]).not.toBeArrayOfStrings();
    },
    whenMixed: function() {
      expect([null, '']).not.toBeArrayOfStrings();
    }
  });

  describeToBeArrayOfX({
    name: 'toBeArrayOfNumbers',
    type: 'Number',
    whenValid: function() {
      expect([1]).toBeArrayOfNumbers();
      expect([new Number(1)]).toBeArrayOfNumbers();
      expect([new Number(0)]).toBeArrayOfNumbers();
      expect([0, 1]).toBeArrayOfNumbers();
    },
    whenInvalid: function() {
      expect([null]).not.toBeArrayOfNumbers();
    },
    whenMixed: function() {
      expect([null, 0]).not.toBeArrayOfNumbers();
    }
  });

  describeToBeArrayOfX({
    name: 'toBeArrayOfBooleans',
    type: 'Boolean',
    whenValid: function() {
      expect([true]).toBeArrayOfBooleans();
      expect([new Boolean(true)]).toBeArrayOfBooleans();
      expect([new Boolean(false)]).toBeArrayOfBooleans();
      expect([false, true]).toBeArrayOfBooleans();
    },
    whenInvalid: function() {
      expect([null]).not.toBeArrayOfBooleans();
    },
    whenMixed: function() {
      expect([null, false]).not.toBeArrayOfBooleans();
      expect([null, true]).not.toBeArrayOfBooleans();
    }
  });

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

});
