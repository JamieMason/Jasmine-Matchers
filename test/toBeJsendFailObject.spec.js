var jsendSamples = require('./lib/jsendSampleData');

var validJsend = jsendSamples.valid;
var invalidJsend = jsendSamples.invalid;

// spec
describe('toBeJsendFailObject', function () {
  describe('when invoked', function () {
    describe('when subject IS a JSEND fail Object', function () {
      it('should confirm', function () {
        validJsend.fail.forEach(function (jsend) {
          expect(jsend).toBeJsendFailObject();
        });
      });
    });
    describe('when subject is NOT a JSEND fail Object', function () {
      it('should deny', function () {
        invalidJsend.success.forEach(function (jsend) {
          expect(jsend).not.toBeJsendFailObject();
        });
        invalidJsend.fail.forEach(function (jsend) {
          expect(jsend).not.toBeJsendFailObject();
        });
        invalidJsend.error.forEach(function (jsend) {
          expect(jsend).not.toBeJsendFailObject();
        });
        validJsend.success.forEach(function (jsend) {
          expect(jsend).not.toBeJsendFailObject();
        });
        validJsend.error.forEach(function (jsend) {
          expect(jsend).not.toBeJsendFailObject();
        });
      });
    });
  });
});
