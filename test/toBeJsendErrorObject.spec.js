var jsendSamples = require('./lib/jsendSampleData');

var validJsend = jsendSamples.valid;
var invalidJsend = jsendSamples.invalid;

// spec
describe('toBeJsendErrorObject', function () {
  describe('when invoked', function () {
    describe('when subject IS a JSEND error Object', function () {
      it('should confirm', function () {
        validJsend.error.forEach(function (jsend) {
          expect(jsend).toBeJsendErrorObject();
        });
      });
    });
    describe('when subject is NOT a JSEND error Object', function () {
      it('should deny', function () {
        invalidJsend.success.forEach(function (jsend) {
          expect(jsend).not.toBeJsendErrorObject();
        });
        invalidJsend.fail.forEach(function (jsend) {
          expect(jsend).not.toBeJsendErrorObject();
        });
        invalidJsend.error.forEach(function (jsend) {
          expect(jsend).not.toBeJsendErrorObject();
        });
        validJsend.fail.forEach(function (jsend) {
          expect(jsend).not.toBeJsendErrorObject();
        });
        validJsend.success.forEach(function (jsend) {
          expect(jsend).not.toBeJsendErrorObject();
        });
      });
    });
  });
});
