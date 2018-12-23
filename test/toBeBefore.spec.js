describe('toBeBefore', () => {
  describe('when invoked', () => {
    describe('when value is a Date', () => {
      describe('when date occurs before another', () => {
        it('should confirm', () => {
          expect(new Date('2013-01-01T00:00:00.000Z')).toBeBefore(
            new Date('2013-01-01T01:00:00.000Z')
          );
        });
      });
      describe('when date does NOT occur before another', () => {
        it('should deny', () => {
          expect(new Date('2013-01-01T01:00:00.000Z')).not.toBeBefore(
            new Date('2013-01-01T00:00:00.000Z')
          );
        });
      });
    });
  });
});
