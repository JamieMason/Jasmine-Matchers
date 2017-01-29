// spec
describe('toBeValidDate', function () {
  describe('when invoked', function () {
    describe('when value is a valid instance of Date', function () {
      it('should confirm', function () {
        expect(new Date()).toBeValidDate();
        expect(new Date('November 18, 1985 08:22:00')).toBeValidDate();
        expect(new Date('1985-11-18T08:22:00')).toBeValidDate();
        expect(new Date(1985, 11, 18, 8, 22, 0)).toBeValidDate();
      });
    });
    describe('when value is NOT a valid instance of Date', function () {
      it('should deny', function () {
        expect(null).not.toBeValidDate();
        expect(function () {}).not.toBeValidDate();
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
