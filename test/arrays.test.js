describe('Arrays', function() {

  describe('toBeArray', function() {
    it('should assert value is a true Array', function() {
      expect([]).toBeArray();
      expect(new Array()).toBeArray();
      expect({}).not.toBeArray();
    });
  });

  describe('toBeArrayOfSize', function() {
    it('should assert value is a true Array with a required number of members', function() {
      expect([]).toBeArrayOfSize(0);
      expect([null]).toBeArrayOfSize(1);
      expect([]).not.toBeArrayOfSize(1);
      expect([null]).not.toBeArrayOfSize(0);
    });
  });

  describe('toBeEmptyArray', function() {
    it('should assert value is a true Array with no members', function() {
      expect([]).toBeEmptyArray();
      expect([null]).not.toBeEmptyArray();
      expect(['']).not.toBeEmptyArray();
      expect([1]).not.toBeEmptyArray();
      expect([true]).not.toBeEmptyArray();
      expect([false]).not.toBeEmptyArray();
    });
  });

  describe('toBeNonEmptyArray', function() {
    it('should assert value is a true Array with at least one member', function() {
      expect([null]).toBeNonEmptyArray();
      expect([]).not.toBeNonEmptyArray();
    });
  });

  describe('toBeArrayOfObjects', function() {
    describe('when Array is empty', function() {
      it('should return true since an empty array of Objects is valid', function() {
        expect([]).toBeArrayOfObjects();
      });
    });
    describe('when Array has items', function() {
      it('should assert all items are Objects', function() {
        expect([{}]).toBeArrayOfObjects();
        expect([{}, {}]).toBeArrayOfObjects();
        expect([null]).not.toBeArrayOfObjects();
        expect([null, {}]).not.toBeArrayOfObjects();
      });
    });
  });

  describe('toBeArrayOfStrings', function() {
    describe('when Array is empty', function() {
      it('should return true since an empty array of Strings is valid', function() {
        expect([]).toBeArrayOfStrings();
      });
    });
    describe('when Array has items', function() {
      it('should assert all items are Strings', function() {
        expect(['truthy']).toBeArrayOfStrings();
        expect([new String('truthy')]).toBeArrayOfStrings();
        expect([new String('')]).toBeArrayOfStrings();
        expect(['', 'truthy']).toBeArrayOfStrings();
        expect([null]).not.toBeArrayOfStrings();
        expect([null, '']).not.toBeArrayOfStrings();
      });
    });
  });

  describe('toBeArrayOfNumbers', function() {
    describe('when Array is empty', function() {
      it('should return true since an empty array of Numbers is valid', function() {
        expect([]).toBeArrayOfNumbers();
      });
    });
    describe('when Array has items', function() {
      it('should assert all items are Numbers', function() {
        expect([1]).toBeArrayOfNumbers();
        expect([new Number(1)]).toBeArrayOfNumbers();
        expect([new Number(0)]).toBeArrayOfNumbers();
        expect([0, 1]).toBeArrayOfNumbers();
        expect([null]).not.toBeArrayOfNumbers();
        expect([null, 0]).not.toBeArrayOfNumbers();
      });
    });
  });

  describe('toBeArrayOfBooleans', function() {
    describe('when Array is empty', function() {
      it('should return true since an empty array of Booleans is valid', function() {
        expect([]).toBeArrayOfBooleans();
      });
    });
    describe('when Array has items', function() {
      it('should assert all items are Booleans', function() {
        expect([true]).toBeArrayOfBooleans();
        expect([new Boolean(true)]).toBeArrayOfBooleans();
        expect([new Boolean(false)]).toBeArrayOfBooleans();
        expect([false, true]).toBeArrayOfBooleans();
        expect([null]).not.toBeArrayOfBooleans();
        expect([null, false]).not.toBeArrayOfBooleans();
      });
    });
  });


  describe('toHaveArray', function() {
    it('should assert value is an Object with a member of name that is an Array', function() {
      expect({ foo: [] }).toHaveArray('foo');
      expect({ foo: '' }).not.toHaveArray('foo');
      expect(null).not.toHaveArray('foo');
      expect({ a: [] }).not.toHaveArray('b');
      expect({ a: null }).not.toHaveArray('b');
      expect({ a: {} }).not.toHaveArray('b');
    });
  });

  describe('toHaveArrayOfSize', function() {
    it('should assert value is an Object with a member of name that is an Array containing an expected number of members', function() {
      expect({ foo: [] }).toHaveArrayOfSize('foo', 0);
      expect({ foo: ['bar'] }).toHaveArrayOfSize('foo', 1);
      expect({ foo: ['bar', 'baz'] }).toHaveArrayOfSize('foo', 2);
      expect({ foo: '' }).not.toHaveArrayOfSize('foo');
      expect({ foo: ['bar'] }).not.toHaveArrayOfSize('foo', 0);
      expect(null).not.toHaveArrayOfSize('foo');
    });
  });

  describe('toHaveEmptyArray', function() {
    it('should assert value is an Object with a member of name that is an Array with no members', function() {
      expect({ foo: [] }).toHaveEmptyArray('foo');
      expect({ foo: [1, 2, 3] }).not.toHaveEmptyArray('foo');
      expect({ foo: '' }).not.toHaveEmptyArray('foo');
      expect(null).not.toHaveEmptyArray('foo');
    });
  });

  describe('toHaveArrayOfObjects', function() {
    describe('when named Array is empty', function() {
      it('should return true since an empty array of Objects is valid', function() {
        expect({ foo: [] }).toHaveArrayOfObjects('foo');
      });
    });
    describe('when named Array has items', function() {
      it('should assert all items are Objects', function() {
        expect({ foo: [{}] }).toHaveArrayOfObjects('foo');
        expect({ foo: [{}, {}] }).toHaveArrayOfObjects('foo');
        expect({ foo: [null] }).not.toHaveArrayOfObjects('foo');
        expect({ foo: [null, {}] }).not.toHaveArrayOfObjects('foo');
      });
    });
  });

  describe('toHaveArrayOfStrings', function() {
    describe('when named Array is empty', function() {
      it('should return true since an empty array of Strings is valid', function() {
        expect({ foo: [] }).toHaveArrayOfStrings('foo');
      });
    });
    describe('when named Array has items', function() {
      it('should assert all items are Strings', function() {
        expect({ foo: ['truthy'] }).toHaveArrayOfStrings('foo');
        expect({ foo: [new String('truthy')] }).toHaveArrayOfStrings('foo');
        expect({ foo: [new String('')] }).toHaveArrayOfStrings('foo');
        expect({ foo: ['', 'truthy'] }).toHaveArrayOfStrings('foo');
        expect({ foo: [null] }).not.toHaveArrayOfStrings('foo');
        expect({ foo: [null, ''] }).not.toHaveArrayOfStrings('foo');
      });
    });
  });

  describe('toHaveArrayOfNumbers', function() {
    describe('when named Array is empty', function() {
      it('should return true since an empty array of Numbers is valid', function() {
        expect({ foo: [] }).toHaveArrayOfNumbers('foo');
      });
    });
    describe('when named Array has items', function() {
      it('should assert all items are Numbers', function() {
        expect({ foo: [1] }).toHaveArrayOfNumbers('foo');
        expect({ foo: [new Number(1)] }).toHaveArrayOfNumbers('foo');
        expect({ foo: [new Number(0)] }).toHaveArrayOfNumbers('foo');
        expect({ foo: [0, 1] }).toHaveArrayOfNumbers('foo');
        expect({ foo: [null] }).not.toHaveArrayOfNumbers('foo');
        expect({ foo: [null, 0] }).not.toHaveArrayOfNumbers('foo');
      });
    });
  });

  describe('toHaveArrayOfBooleans', function() {
    describe('when named Array is empty', function() {
      it('should return true since an empty array of Booleans is valid', function() {
        expect({ foo: [] }).toHaveArrayOfBooleans('foo');
      });
    });
    describe('when named Array has items', function() {
      it('should assert all items are Booleans', function() {
        expect({ foo: [true] }).toHaveArrayOfBooleans('foo');
        expect({ foo: [new Boolean(true)] }).toHaveArrayOfBooleans('foo');
        expect({ foo: [new Boolean(false)] }).toHaveArrayOfBooleans('foo');
        expect({ foo: [false, true] }).toHaveArrayOfBooleans('foo');
        expect({ foo: [null] }).not.toHaveArrayOfBooleans('foo');
        expect({ foo: [null, false] }).not.toHaveArrayOfBooleans('foo');
      });
    });
  });

});
