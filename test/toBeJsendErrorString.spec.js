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
describe('toBeJsendErrorString', function () {
  describe('when invoked', function () {
    describe('when subject IS a JSEND error String', function () {
      it('should confirm', function () {
        validJsend.error.forEach(function (jsend) {
          expect(JSON.stringify(jsend)).toBeJsendErrorString();
        });
      });
    });
    describe('when subject is NOT a JSEND error String', function () {
      it('should deny', function () {
        validJsend.error.forEach(function (jsend) {
          expect(jsend).not.toBeJsendErrorString();
        });
        invalidJsend.success.forEach(function (jsend) {
          expect(stringifyIfJson(jsend)).not.toBeJsendErrorString();
        });
        invalidJsend.fail.forEach(function (jsend) {
          expect(stringifyIfJson(jsend)).not.toBeJsendErrorString();
        });
        invalidJsend.error.forEach(function (jsend) {
          expect(stringifyIfJson(jsend)).not.toBeJsendErrorString();
        });
        validJsend.fail.forEach(function (jsend) {
          expect(JSON.stringify(jsend)).not.toBeJsendErrorString();
        });
        validJsend.success.forEach(function (jsend) {
          expect(JSON.stringify(jsend)).not.toBeJsendErrorString();
        });
      });
    });
  });
});
