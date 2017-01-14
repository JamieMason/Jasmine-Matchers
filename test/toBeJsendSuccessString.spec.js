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
describe('toBeJsendSuccessString', function () {
  describe('when invoked', function () {
    describe('when subject IS a JSEND success String', function () {
      it('should confirm', function () {
        validJsend.success.forEach(function (jsend) {
          expect(JSON.stringify(jsend)).toBeJsendSuccessString();
        });
      });
    });
    describe('when subject is NOT a JSEND success String', function () {
      it('should deny', function () {
        validJsend.success.forEach(function (jsend) {
          expect(jsend).not.toBeJsendSuccessString();
        });
        invalidJsend.success.forEach(function (jsend) {
          expect(stringifyIfJson(jsend)).not.toBeJsendSuccessString();
        });
        invalidJsend.fail.forEach(function (jsend) {
          expect(stringifyIfJson(jsend)).not.toBeJsendSuccessString();
        });
        invalidJsend.error.forEach(function (jsend) {
          expect(stringifyIfJson(jsend)).not.toBeJsendSuccessString();
        });
        validJsend.fail.forEach(function (jsend) {
          expect(JSON.stringify(jsend)).not.toBeJsendSuccessString();
        });
        validJsend.error.forEach(function (jsend) {
          expect(JSON.stringify(jsend)).not.toBeJsendSuccessString();
        });
      });
    });
  });
});
