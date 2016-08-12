// modules
var describeWhenNotArray = require('./lib/describeWhenNotArray');

// spec
describe('toBeArrayOfSize', function () {
  describe('when invoked', function () {
    describe('when subject is a true Array', function () {
      describe('when subject has the expected number of members', function () {
        it('should confirm', function () {
          var _undefined;
          expect([]).toBeArrayOfSize(0);
          expect([null]).toBeArrayOfSize(1);
          expect([false, false]).toBeArrayOfSize(2);
          expect([_undefined, _undefined]).toBeArrayOfSize(2);
        });
      });
      describe('when subject has an unexpected number of members', function () {
        it('should deny', function () {
          expect([]).not.toBeArrayOfSize(1);
          expect([null]).not.toBeArrayOfSize(0);
          expect([true, true]).not.toBeArrayOfSize(1);
        });
      });
    });
    describeWhenNotArray('toBeArrayOfSize');
  });
});
