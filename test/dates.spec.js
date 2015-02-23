describe('Dates', function() {

  describe('toBeDate', function() {
    describe('when invoked', function() {
      describe('when value is an instance of Date', function() {
        it('should confirm', function() {
          expect(new Date()).toBeDate();
        });
      });
      describe('when value is NOT an instance of Date', function() {
        it('should deny', function() {
          expect(null).not.toBeDate();
        });
      });
    });
  });

  describe('toBeIso8601', function() {
    describe('when invoked', function() {
      describe('when value is a Date String conforming to the ISO 8601 standard', function() {
        describe('when specified date is valid', function() {
          it('should confirm', function() {
            expect('2013-07-08T07:29:15.863Z').toBeIso8601();
            expect('2013-07-08T07:29:15.863').toBeIso8601();
            expect('2013-07-08T07:29:15').toBeIso8601();
            expect('2013-07-08T07:29').toBeIso8601();
            expect('2013-07-08').toBeIso8601();
          });
        });
        describe('when specified date is NOT valid', function() {
          it('should deny', function() {
            expect('2013-99-12T00:00:00.000Z').not.toBeIso8601();
            expect('2013-12-99T00:00:00.000Z').not.toBeIso8601();
            expect('2013-01-01T99:00:00.000Z').not.toBeIso8601();
            expect('2013-01-01T99:99:00.000Z').not.toBeIso8601();
            expect('2013-01-01T00:00:99.000Z').not.toBeIso8601();
          });
        });
      });
      describe('when value is a String NOT conforming to the ISO 8601 standard', function() {
        it('should deny', function() {
          expect('2013-07-08T07:29:15.').not.toBeIso8601();
          expect('2013-07-08T07:29:').not.toBeIso8601();
          expect('2013-07-08T07:2').not.toBeIso8601();
          expect('2013-07-08T07:').not.toBeIso8601();
          expect('2013-07-08T07').not.toBeIso8601();
          expect('2013-07-08T').not.toBeIso8601();
          expect('2013-07-0').not.toBeIso8601();
          expect('2013-07-').not.toBeIso8601();
          expect('2013-07').not.toBeIso8601();
          expect('2013-0').not.toBeIso8601();
          expect('2013-').not.toBeIso8601();
          expect('2013').not.toBeIso8601();
          expect('201').not.toBeIso8601();
          expect('20').not.toBeIso8601();
          expect('2').not.toBeIso8601();
          expect('').not.toBeIso8601();
        });
      });
    });
  });

  describe('toBeBefore', function() {
    describe('when invoked', function() {
      describe('when value is a Date', function() {
        describe('when date occurs before another', function() {
          it('should confirm', function() {
            expect(new Date('2013-01-01T00:00:00.000Z')).toBeBefore(new Date('2013-01-01T01:00:00.000Z'));
          });
        });
        describe('when date does NOT occur before another', function() {
          it('should deny', function() {
            expect(new Date('2013-01-01T01:00:00.000Z')).not.toBeBefore(new Date('2013-01-01T00:00:00.000Z'));
          });
        });
      });
    });
  });

  describe('toBeAfter', function() {
    describe('when invoked', function() {
      describe('when value is a Date', function() {
        describe('when date occurs after another', function() {
          it('should confirm', function() {
            expect(new Date('2013-01-01T01:00:00.000Z')).toBeAfter(new Date('2013-01-01T00:00:00.000Z'));
          });
        });
        describe('when date does NOT occur after another', function() {
          it('should deny', function() {
            expect(new Date('2013-01-01T00:00:00.000Z')).not.toBeAfter(new Date('2013-01-01T01:00:00.000Z'));
          });
        });
      });
    });
  });

});
