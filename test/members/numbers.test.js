describe('Number Members', function() {

  describeToHaveX({
    name: 'toHaveNumber',
    whenPresent: function() {
      describe('when subject IS a number', function() {
        it('should confirm', function() {
          expect({
            memberName: 1
          }).toHaveNumber('memberName');
          expect({
            memberName: 1.11
          }).toHaveNumber('memberName');
          expect({
            memberName: 1e3
          }).toHaveNumber('memberName');
          expect({
            memberName: 0.11
          }).toHaveNumber('memberName');
          expect({
            memberName: -11
          }).toHaveNumber('memberName');
        });
      });
      describe('when subject is NOT a number', function() {
        it('should deny', function() {
          expect({
            memberName: '1'
          }).not.toHaveNumber('memberName');
          expect({
            memberName: NaN
          }).not.toHaveNumber('memberName');
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveCalculable',
    whenPresent: function() {
      describe('when subject CAN be coerced to be used in mathematical operations', function() {
        it('should confirm', function() {
          expect({
            memberName: '1'
          }).toHaveCalculable('memberName');
          expect({
            memberName: ''
          }).toHaveCalculable('memberName');
          expect({
            memberName: null
          }).toHaveCalculable('memberName');
        });
      });
      describe('when subject can NOT be coerced by JavaScript to be used in mathematical operations', function() {
        it('should deny', function() {
          expect({
            memberName: {}
          }).not.toHaveCalculable('memberName');
          expect({
            memberName: NaN
          }).not.toHaveCalculable('memberName');
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveEvenNumber',
    whenPresent: function() {
      describe('when subject IS an even number', function() {
        it('should confirm', function() {
          expect({
            memberName: 2
          }).toHaveEvenNumber('memberName');
        });
      });
      describe('when subject is NOT an even number', function() {
        it('should deny', function() {
          expect({
            memberName: 1
          }).not.toHaveEvenNumber('memberName');
          expect({
            memberName: NaN
          }).not.toHaveEvenNumber('memberName');
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveOddNumber',
    whenPresent: function() {
      describe('when subject IS an odd number', function() {
        it('should confirm', function() {
          expect({
            memberName: 1
          }).toHaveOddNumber('memberName');
        });
      });
      describe('when subject is NOT an odd number', function() {
        it('should deny', function() {
          expect({
            memberName: 2
          }).not.toHaveOddNumber('memberName');
          expect({
            memberName: NaN
          }).not.toHaveOddNumber('memberName');
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveNumberWithinRange',
    whenPresent: function() {
      describe('when subject IS a number >= floor and <= ceiling', function() {
        it('should confirm', function() {
          expect({
            memberName: 0
          }).toHaveNumberWithinRange('memberName', 0, 2);
          expect({
            memberName: 1
          }).toHaveNumberWithinRange('memberName', 0, 2);
          expect({
            memberName: 2
          }).toHaveNumberWithinRange('memberName', 0, 2);
        });
      });
      describe('when subject is NOT a number >= floor and <= ceiling', function() {
        it('should deny', function() {
          expect({
            memberName: -3
          }).not.toHaveNumberWithinRange('memberName', 0, 2);
          expect({
            memberName: -2
          }).not.toHaveNumberWithinRange('memberName', 0, 2);
          expect({
            memberName: -1
          }).not.toHaveNumberWithinRange('memberName', 0, 2);
          expect({
            memberName: 3
          }).not.toHaveNumberWithinRange('memberName', 0, 2);
          expect({
            memberName: NaN
          }).not.toHaveNumberWithinRange('memberName', 0, 2);
        });
      });
    }
  });

  describeToHaveX({
    name: 'toHaveWholeNumber',
    whenPresent: function() {
      describe('when subject IS a number with no positive decimal places', function() {
        it('should confirm', function() {
          expect({
            memberName: 1
          }).toHaveWholeNumber('memberName');
          expect({
            memberName: 0
          }).toHaveWholeNumber('memberName');
          expect({
            memberName: 0.0
          }).toHaveWholeNumber('memberName');
        });
      });
      describe('when subject is NOT a number with no positive decimal places', function() {
        it('should deny', function() {
          expect({
            memberName: NaN
          }).not.toHaveWholeNumber('memberName');
          expect({
            memberName: 1.1
          }).not.toHaveWholeNumber('memberName');
          expect({
            memberName: 0.1
          }).not.toHaveWholeNumber('memberName');
        });
      });
    }
  });

});
