// modules
var describeWhenNotArray = require('./lib/describeWhenNotArray');

// spec
describe('toBeNonEmptyArray', function () {
  describe('when invoked', function () {
    describe('when subject is a true Array', function () {
      describe('when subject has members', function () {
        it('should confirm', function () {
          var _undefined;
          expect([null]).toBeNonEmptyArray();
          expect([_undefined]).toBeNonEmptyArray();
          expect(['']).toBeNonEmptyArray();
        });
      });
      describe('when subject has no members', function () {
        it('should deny', function () {
          expect([]).not.toBeNonEmptyArray();
        });
      });
    });
    describeWhenNotArray('toBeNonEmptyArray');
  });
});
