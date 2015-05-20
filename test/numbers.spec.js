describe('Numbers', function() {

  describe('toBeNumber', function() {
    describe('when invoked', function() {
      describe('when subject IS a number', function() {
        it('should confirm', function() {
          expect(1).toBeNumber();
          expect(1.11).toBeNumber();
          expect(1e3).toBeNumber();
          expect(0.11).toBeNumber();
          expect(-11).toBeNumber();
        });
      });
      describe('when subject is NOT a number', function() {
        it('should deny', function() {
          expect('1').not.toBeNumber();
          expect(NaN).not.toBeNumber();
        });
      });
    });
  });

  describe('toBeCalculable', function() {
    describe('when invoked', function() {
      describe('when subject CAN be coerced to be used in mathematical operations', function() {
        it('should confirm', function() {
          expect('1').toBeCalculable();
          expect('').toBeCalculable();
          expect(null).toBeCalculable();
        });
      });
      describe('when subject can NOT be coerced by JavaScript to be used in mathematical operations', function() {
        it('should deny', function() {
          expect({}).not.toBeCalculable();
          expect(NaN).not.toBeCalculable();
        });
      });
    });
  });

  describe('toBeEvenNumber', function() {
    describe('when invoked', function() {
      describe('when subject IS an even number', function() {
        it('should confirm', function() {
          expect(2).toBeEvenNumber();
        });
      });
      describe('when subject is NOT an even number', function() {
        it('should deny', function() {
          expect(1).not.toBeEvenNumber();
          expect(NaN).not.toBeEvenNumber();
        });
      });
    });
  });

  describe('toBeOddNumber', function() {
    describe('when invoked', function() {
      describe('when subject IS an odd number', function() {
        it('should confirm', function() {
          expect(1).toBeOddNumber();
        });
      });
      describe('when subject is NOT an odd number', function() {
        it('should deny', function() {
          expect(2).not.toBeOddNumber();
          expect(NaN).not.toBeOddNumber();
        });
      });
    });
  });

  describe('toBeWithinRange', function() {
    describe('when invoked', function() {
      describe('when subject IS a number >= floor and <= ceiling', function() {
        it('should confirm', function() {
          expect(0).toBeWithinRange(0, 2);
          expect(1).toBeWithinRange(0, 2);
          expect(2).toBeWithinRange(0, 2);
        });
      });
      describe('when subject is NOT a number >= floor and <= ceiling', function() {
        it('should deny', function() {
          expect(-3).not.toBeWithinRange(0, 2);
          expect(-2).not.toBeWithinRange(0, 2);
          expect(-1).not.toBeWithinRange(0, 2);
          expect(3).not.toBeWithinRange(0, 2);
          expect(NaN).not.toBeWithinRange(0, 2);
        });
      });
    });
  });

  describe('toBeWholeNumber', function() {
    describe('when invoked', function() {
      describe('when subject IS a number with no positive decimal places', function() {
        it('should confirm', function() {
          expect(1).toBeWholeNumber();
          expect(0).toBeWholeNumber();
          expect(0.0).toBeWholeNumber();
        });
      });
      describe('when subject is NOT a number with no positive decimal places', function() {
        it('should deny', function() {
          expect(NaN).not.toBeWholeNumber();
          expect(1.1).not.toBeWholeNumber();
          expect(0.1).not.toBeWholeNumber();
        });
      });
    });
  });

  describe('toBeNaN', function() {
    describe('when invoked', function() {
      describe('when subject IS NaN', function() {
        it('should confirm', function() {
          expect(NaN).toBeNaN();
          expect(Number.NaN).toBeNaN();
          expect(0/0).toBeNaN();
        });
      });
      describe('when subject is NOT NaN', function() {
        it('should deny', function() {
          expect(0).not.toBeNaN();
          expect(1).not.toBeNaN();
          expect('').not.toBeNaN();
          expect('a').not.toBeNaN();
          expect(function(){}).not.toBeNaN();
          expect({}).not.toBeNaN();
          expect([]).not.toBeNaN();
          expect(false).not.toBeNaN();
          expect(null).not.toBeNaN();
        });
      });
    });
  });
});
