describe('toBeAfter', () => {
  describe('when invoked', () => {
    describe('when value is a Date', () => {
      describe('when date occurs after another', () => {
        it('should confirm', () => {
          expect(new Date('2013-01-01T01:00:00.000Z')).toBeAfter(
            new Date('2013-01-01T00:00:00.000Z')
          );
        });
      });
      describe('when date does NOT occur after another', () => {
        it('should deny', () => {
          expect(new Date('2013-01-01T00:00:00.000Z')).not.toBeAfter(
            new Date('2013-01-01T01:00:00.000Z')
          );
        });
      });
    });
  });
});
