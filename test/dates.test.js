describe('Dates', function () {

  describe('toBeDate', function () {
    it('asserts value is an instance of Date', function () {
      expect(new Date()).toBeDate();
      expect(null).not.toBeDate();
    });
  });

  describe('toBeIso8601', function () {
    it('asserts value is a Date String conforming to the ISO 8601 standard', function () {
      // format
      expect('2013-07-08T07:29:15.863Z').toBeIso8601();
      expect('2013-07-08T07:29:15.863').toBeIso8601();
      expect('2013-07-08T07:29:15.').not.toBeIso8601();
      expect('2013-07-08T07:29:15').toBeIso8601();
      expect('2013-07-08T07:29:').not.toBeIso8601();
      expect('2013-07-08T07:29').toBeIso8601();
      expect('2013-07-08T07:2').not.toBeIso8601();
      expect('2013-07-08T07:').not.toBeIso8601();
      expect('2013-07-08T07').not.toBeIso8601();
      expect('2013-07-08T').not.toBeIso8601();
      expect('2013-07-08').toBeIso8601();
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
      // valid format, but impossible dates
      expect('2013-99-12T00:00:00.000Z').not.toBeIso8601();
      expect('2013-12-99T00:00:00.000Z').not.toBeIso8601();
      expect('2013-01-01T99:00:00.000Z').not.toBeIso8601();
      expect('2013-01-01T99:99:00.000Z').not.toBeIso8601();
      expect('2013-01-01T00:00:99.000Z').not.toBeIso8601();
    });
  });

  describe('toBeBefore', function () {
    it('asserts value is a Date occurring before another Date', function () {
      expect(new Date('2013-01-01T00:00:00.000Z')).toBeBefore(new Date('2013-01-01T01:00:00.000Z'));
      expect(new Date('2013-01-01T01:00:00.000Z')).not.toBeBefore(new Date('2013-01-01T00:00:00.000Z'));
    });
  });

  describe('toBeAfter', function () {
    it('asserts value is a Date occurring after another Date', function () {
      expect(new Date('2013-01-01T01:00:00.000Z')).toBeAfter(new Date('2013-01-01T00:00:00.000Z'));
      expect(new Date('2013-01-01T00:00:00.000Z')).not.toBeAfter(new Date('2013-01-01T01:00:00.000Z'));
    });
  });

});
