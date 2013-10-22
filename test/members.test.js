describe('Members', function() {

  describe('toHaveArray', function () {
    it('asserts value is an Object with a member of name that is an Array', function () {
      expect({ foo: [] }).toHaveArray('foo');
      expect({ foo: '' }).not.toHaveArray('foo');
      expect(null).not.toHaveArray('foo');
    });
  });

  describe('toHaveArrayOfSize', function () {
    it('asserts value is an Object with a member of name that is an Array containing an expected number of members', function () {
      expect({ foo: [] }).toHaveArrayOfSize('foo', 0);
      expect({ foo: ['bar'] }).toHaveArrayOfSize('foo', 1);
      expect({ foo: ['bar', 'baz'] }).toHaveArrayOfSize('foo', 2);
      expect({ foo: '' }).not.toHaveArrayOfSize('foo');
      expect({ foo: ['bar'] }).not.toHaveArrayOfSize('foo', 0);
      expect(null).not.toHaveArrayOfSize('foo');
    });
  });

  describe('toHaveEmptyArray', function () {
    it('asserts value is an Object with a member of name that is an Array with no members', function () {
      expect({ foo: [] }).toHaveEmptyArray('foo');
      expect({ foo: [1, 2, 3] }).not.toHaveEmptyArray('foo');
      expect({ foo: '' }).not.toHaveEmptyArray('foo');
      expect(null).not.toHaveEmptyArray('foo');
    });
  });

  describe('toHaveArrayOfObjects', function () {
    describe('when named Array is empty', function() {
      it('returns true since an empty array of Objects is valid', function() {
        expect({ foo: [] }).toHaveArrayOfObjects('foo');
      });
    });
    describe('when named Array has items', function() {
      it('asserts all items are Objects', function () {
        expect({ foo: [{}] }).toHaveArrayOfObjects('foo');
        expect({ foo: [{}, {}] }).toHaveArrayOfObjects('foo');
        expect({ foo: [null] }).not.toHaveArrayOfObjects('foo');
        expect({ foo: [null, {}] }).not.toHaveArrayOfObjects('foo');
      });
    });
  });

  describe('toHaveArrayOfStrings', function () {
    describe('when named Array is empty', function() {
      it('returns true since an empty array of Strings is valid', function() {
        expect({ foo: [] }).toHaveArrayOfStrings('foo');
      });
    });
    describe('when named Array has items', function() {
      it('asserts all items are Strings', function () {
        expect({ foo: ['truthy'] }).toHaveArrayOfStrings('foo');
        expect({ foo: [new String('truthy')] }).toHaveArrayOfStrings('foo');
        expect({ foo: [new String('')] }).toHaveArrayOfStrings('foo');
        expect({ foo: ['', 'truthy'] }).toHaveArrayOfStrings('foo');
        expect({ foo: [null] }).not.toHaveArrayOfStrings('foo');
        expect({ foo: [null, ''] }).not.toHaveArrayOfStrings('foo');
      });
    });
  });

  describe('toHaveArrayOfNumbers', function () {
    describe('when named Array is empty', function() {
      it('returns true since an empty array of Numbers is valid', function() {
        expect({ foo: [] }).toHaveArrayOfNumbers('foo');
      });
    });
    describe('when named Array has items', function() {
      it('asserts all items are Numbers', function () {
        expect({ foo: [1] }).toHaveArrayOfNumbers('foo');
        expect({ foo: [new Number(1)] }).toHaveArrayOfNumbers('foo');
        expect({ foo: [new Number(0)] }).toHaveArrayOfNumbers('foo');
        expect({ foo: [0, 1] }).toHaveArrayOfNumbers('foo');
        expect({ foo: [null] }).not.toHaveArrayOfNumbers('foo');
        expect({ foo: [null, 0] }).not.toHaveArrayOfNumbers('foo');
      });
    });
  });

  describe('toHaveArrayOfBooleans', function () {
    describe('when named Array is empty', function() {
      it('returns true since an empty array of Booleans is valid', function() {
        expect({ foo: [] }).toHaveArrayOfBooleans('foo');
      });
    });
    describe('when named Array has items', function() {
      it('asserts all items are Booleans', function () {
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
