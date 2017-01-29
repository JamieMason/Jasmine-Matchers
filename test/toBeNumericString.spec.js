// spec
describe('toBeNumericString', function () {
  describe('when invoked', function () {
    describe('when subject IS a numeric string', function () {
      it('should confirm', function () {
        expect('123').toBeNumericString();
        expect('1,234,567.00').toBeNumericString();
        expect('1,234,567,100').toBeNumericString();
        expect('1,234.567890').toBeNumericString();
        expect('1e100').toBeNumericString();
        expect('1.0e+100').toBeNumericString();
        expect('0x44c').toBeNumericString();
      });
    });
    describe('when subject is NOT a numeric string', function () {
      it('should deny', function () {
        expect(null).not.toBeNumericString();
        expect(function () {}).not.toBeNumericString();
        expect(new Number()).not.toBeNumericString();
        expect('   123  ').not.toBeNumericString();
        expect('\r\n\t').not.toBeNumericString();
        expect('1..0').not.toBeNumericString();
        expect('1,234,567.00').toBeNumericString();
        expect('1,23.45.67').not.toBeNumericString();
        expect('1.234.567').not.toBeNumericString();
        expect('1,234,56700').not.toBeNumericString();
        expect(123).not.toBeNumericString();
      });
    });
  })
});
