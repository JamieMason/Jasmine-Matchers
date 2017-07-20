describe('toBeValidDate', () => {
  describe('when invoked', () => {
    describe('when value is a valid instance of Date', () => {
      it('should confirm', () => {
        expect(new Date()).toBeValidDate();
        expect(new Date('November 18, 1985 08:22:00')).toBeValidDate();
        expect(new Date('1985-11-18T08:22:00')).toBeValidDate();
        expect(new Date(1985, 11, 18, 8, 22, 0)).toBeValidDate();
      });
    });
    describe('when value is NOT a valid instance of Date', () => {
      it('should deny', () => {
        expect(null).not.toBeValidDate();
        expect(() => {}).not.toBeValidDate();
        try {
          expect(new Date('')).not.toBeValidDate();
          expect(new Date('invalid')).not.toBeValidDate();
        } catch (err) {
          // ignore "RangeError: Invalid time value" seen only in node.js
        }
      });
    });
  });
});
