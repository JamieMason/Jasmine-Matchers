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

});
