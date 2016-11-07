var jsendSamples = require('./lib/jsendSampleData');

var validJsend = jsendSamples.valid;
var invalidJsend = jsendSamples.invalid;

// spec
describe('toBeJsendSuccessObject', function () {
  describe('when invoked', function () {
    describe('when subject IS a JSEND success Object', function () {
      it('should confirm', function () {
        validJsend.success.forEach(function (jsend) {
          expect(jsend).toBeJsendSuccessObject();
        });
      });
    });
    describe('when subject is NOT a JSEND success Object', function () {
      it('should deny', function () {
        invalidJsend.success.forEach(function (jsend) {
          expect(jsend).not.toBeJsendSuccessObject();
        });
        invalidJsend.fail.forEach(function (jsend) {
          expect(jsend).not.toBeJsendSuccessObject();
        });
        invalidJsend.error.forEach(function (jsend) {
          expect(jsend).not.toBeJsendSuccessObject();
        });
        validJsend.fail.forEach(function (jsend) {
          expect(jsend).not.toBeJsendSuccessObject();
        });
        validJsend.error.forEach(function (jsend) {
          expect(jsend).not.toBeJsendSuccessObject();
        });
      });
    });
  });
});
