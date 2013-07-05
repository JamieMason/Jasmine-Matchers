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

  describe('toBeWithinRange', function () {
    it('asserts value is a number >= floor or <= ceiling', function () {
      expect(-3).not.toBeWithinRange(0, 2);
      expect(-2).not.toBeWithinRange(0, 2);
      expect(-1).not.toBeWithinRange(0, 2);
      expect(0).toBeWithinRange(0, 2);
      expect(1).toBeWithinRange(0, 2);
      expect(2).toBeWithinRange(0, 2);
      expect(3).not.toBeWithinRange(0, 2);
      expect(NaN).not.toBeWithinRange(0, 2);
    });
  });

  describe('toBeWholeNumber', function () {
    it('asserts value is a number with no positive decimal places', function () {
      expect(1).toBeWholeNumber();
      expect(0).toBeWholeNumber();
      expect(0.0).toBeWholeNumber();
      expect(NaN).not.toBeWholeNumber();
      expect(1.1).not.toBeWholeNumber();
      expect(0.1).not.toBeWholeNumber();
    });
  });

});
