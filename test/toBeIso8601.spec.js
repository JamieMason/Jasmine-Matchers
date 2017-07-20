describe('toBeIso8601', () => {
  describe('when invoked', () => {
    describe('when value is a Date String conforming to the ISO 8601 standard', () => {
      describe('when specified date is valid', () => {
        it('should confirm', () => {
          expect('2013-07-08T07:29:15.863Z').toBeIso8601();
          expect('2013-07-08T07:29:15.863').toBeIso8601();
          expect('2013-07-08T07:29:15').toBeIso8601();
          expect('2013-07-08T07:29').toBeIso8601();
          expect('2013-07-08').toBeIso8601();
        });
      });
      describe('when specified date is NOT valid', () => {
        it('should deny', () => {
          expect('2013-99-12T00:00:00.000Z').not.toBeIso8601();
          expect('2013-12-99T00:00:00.000Z').not.toBeIso8601();
          expect('2013-01-01T99:00:00.000Z').not.toBeIso8601();
          expect('2013-01-01T99:99:00.000Z').not.toBeIso8601();
          expect('2013-01-01T00:00:99.000Z').not.toBeIso8601();
        });
      });
    });
    describe('when value is a String NOT conforming to the ISO 8601 standard', () => {
      it('should deny', () => {
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
