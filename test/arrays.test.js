describe('Arrays', function() {

  describe('toBeArray', function () {
    it('asserts value is a true Array', function () {
      expect([]).toBeArray();
      expect(new Array()).toBeArray();
      expect({}).not.toBeArray();
    });
  });

  describe('toBeArrayOfSize', function () {
    it('asserts value is a true Array with a required number of members', function () {
      expect([]).toBeArrayOfSize(0);
      expect([null]).toBeArrayOfSize(1);
      expect([]).not.toBeArrayOfSize(1);
      expect([null]).not.toBeArrayOfSize(0);
    });
  });

  describe('toBeEmptyArray', function () {
    it('asserts value is a true Array with no members', function () {
      expect([]).toBeEmptyArray();
      expect([null]).not.toBeEmptyArray();
      expect(['']).not.toBeEmptyArray();
      expect([1]).not.toBeEmptyArray();
      expect([true]).not.toBeEmptyArray();
      expect([false]).not.toBeEmptyArray();
    });
  });

  describe('toBeNonEmptyArray', function () {
    it('asserts value is a true Array with at least one member', function () {
      expect([null]).toBeNonEmptyArray();
      expect([]).not.toBeNonEmptyArray();
    });
  });

  describe('toBeArrayOfObjects', function () {
    describe('when Array is empty', function() {
      it('returns true since an empty array of Objects is valid', function() {
        expect([]).toBeArrayOfObjects();
      });
    });
    describe('when Array has items', function() {
      it('asserts all items are Objects', function () {
        expect([{}]).toBeArrayOfObjects();
        expect([{}, {}]).toBeArrayOfObjects();
        expect([null]).not.toBeArrayOfObjects();
        expect([null, {}]).not.toBeArrayOfObjects();
      });
    });
  });

  describe('toBeArrayOfStrings', function () {
    describe('when Array is empty', function() {
      it('returns true since an empty array of Strings is valid', function() {
        expect([]).toBeArrayOfStrings();
      });
    });
    describe('when Array has items', function() {
      it('asserts all items are Strings', function () {
        expect(['truthy']).toBeArrayOfStrings();
        expect([new String('truthy')]).toBeArrayOfStrings();
        expect([new String('')]).toBeArrayOfStrings();
        expect(['', 'truthy']).toBeArrayOfStrings();
        expect([null]).not.toBeArrayOfStrings();
        expect([null, '']).not.toBeArrayOfStrings();
      });
    });
  });

  describe('toBeArrayOfNumbers', function () {
    describe('when Array is empty', function() {
      it('returns true since an empty array of Numbers is valid', function() {
        expect([]).toBeArrayOfNumbers();
      });
    });
    describe('when Array has items', function() {
      it('asserts all items are Numbers', function () {
        expect([1]).toBeArrayOfNumbers();
        expect([new Number(1)]).toBeArrayOfNumbers();
        expect([new Number(0)]).toBeArrayOfNumbers();
        expect([0, 1]).toBeArrayOfNumbers();
        expect([null]).not.toBeArrayOfNumbers();
        expect([null, 0]).not.toBeArrayOfNumbers();
      });
    });
  });

  describe('toBeArrayOfBooleans', function () {
    describe('when Array is empty', function() {
      it('returns true since an empty array of Booleans is valid', function() {
        expect([]).toBeArrayOfBooleans();
      });
    });
    describe('when Array has items', function() {
      it('asserts all items are Booleans', function () {
        expect([true]).toBeArrayOfBooleans();
        expect([new Boolean(true)]).toBeArrayOfBooleans();
        expect([new Boolean(false)]).toBeArrayOfBooleans();
        expect([false, true]).toBeArrayOfBooleans();
        expect([null]).not.toBeArrayOfBooleans();
        expect([null, false]).not.toBeArrayOfBooleans();
      });
    });
  });

});
