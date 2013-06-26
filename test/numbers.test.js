describe('Numbers', function() {

  describe('toBeNumber', function () {
    it('asserts value is a number', function () {
      expect(1).toBeNumber();
      expect(1.11).toBeNumber();
      expect(1e3).toBeNumber();
      expect(0.11).toBeNumber();
      expect(-11).toBeNumber();
      expect('1').not.toBeNumber();
      expect(NaN).not.toBeNumber();
    });
  });

  describe('toBeCalculable', function () {
    it('asserts value can be coerced by JavaScript to be used in mathematical operations', function () {
      expect('1').toBeCalculable();
      expect({}).not.toBeCalculable();
      expect('').toBeCalculable();
      expect(null).toBeCalculable();
      expect(NaN).not.toBeCalculable();
    });
  });

  describe('toBeEvenNumber', function () {
    it('asserts value is an even number', function () {
      expect(2).toBeEvenNumber();
      expect(1).not.toBeEvenNumber();
      expect(NaN).not.toBeEvenNumber();
    });
  });

  describe('toBeOddNumber', function () {
    it('asserts value is an even number', function () {
      expect(1).toBeOddNumber();
      expect(2).not.toBeOddNumber();
      expect(NaN).not.toBeOddNumber();
    });
  });

});
