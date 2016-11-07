var jsendSamples = require('./lib/jsendSampleData');

var validJsend = jsendSamples.valid;
var invalidJsend = jsendSamples.invalid;

// spec
describe('toBeJsendObject', function () {
  describe('when invoked', function () {
    describe('when subject IS a JSEND Object', function () {
      it('should confirm', function () {
        validJsend.success.forEach(function (jsend) {
          expect(jsend).toBeJsendObject();
        });
        validJsend.fail.forEach(function (jsend) {
          expect(jsend).toBeJsendObject();
        });
        validJsend.error.forEach(function (jsend) {
          expect(jsend).toBeJsendObject();
        });
      });
    });
    describe('when subject is NOT a JSEND Object', function () {
      it('should deny', function () {
        invalidJsend.success.forEach(function (jsend) {
          expect(jsend).not.toBeJsendObject();
        });
        invalidJsend.fail.forEach(function (jsend) {
          expect(jsend).not.toBeJsendObject();
        });
        invalidJsend.error.forEach(function (jsend) {
          expect(jsend).not.toBeJsendObject();
        });
      });
    });
  });
});
