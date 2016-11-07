var jsendSamples = require('./lib/jsendSampleData');

var validJsend = jsendSamples.valid;
var invalidJsend = jsendSamples.invalid;

function stringifyIfJson(obj) {
  try {
    return JSON.stringify(obj);
  } catch (err) {
    return String(obj);
  }
}

// spec
describe('toBeJsendFailString', function () {
  describe('when invoked', function () {
    describe('when subject IS a JSEND fail String', function () {
      it('should confirm', function () {
        validJsend.fail.forEach(function (jsend) {
          expect(JSON.stringify(jsend)).toBeJsendFailString();
        });
      });
    });
    describe('when subject is NOT a JSEND fail String', function () {
      it('should deny', function () {
        invalidJsend.fail.forEach(function (jsend) {
          expect(stringifyIfJson(jsend)).not.toBeJsendFailString();
        });
        invalidJsend.error.forEach(function (jsend) {
          expect(stringifyIfJson(jsend)).not.toBeJsendFailString();
        });
        invalidJsend.success.forEach(function (jsend) {
          expect(stringifyIfJson(jsend)).not.toBeJsendFailString();
        });
        validJsend.error.forEach(function (jsend) {
          expect(JSON.stringify(jsend)).not.toBeJsendFailString();
        });
        validJsend.success.forEach(function (jsend) {
          expect(JSON.stringify(jsend)).not.toBeJsendFailString();
        });
      });
    });
  });
});
