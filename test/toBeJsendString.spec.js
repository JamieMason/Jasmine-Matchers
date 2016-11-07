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
describe('toBeJsendString', function () {
  describe('when invoked', function () {
    describe('when subject IS a JSEND String', function () {
      it('should confirm', function () {
        validJsend.success.forEach(function (jsend) {
          expect(JSON.stringify(jsend)).toBeJsendString();
        });
        validJsend.fail.forEach(function (jsend) {
          expect(JSON.stringify(jsend)).toBeJsendString();
        });
        validJsend.error.forEach(function (jsend) {
          expect(JSON.stringify(jsend)).toBeJsendString();
        });
      });
    });
    describe('when subject is NOT a JSEND String', function () {
      it('should deny', function () {
        validJsend.success.forEach(function (jsend) {
          expect(jsend).not.toBeJsendString();
        });
        validJsend.fail.forEach(function (jsend) {
          expect(jsend).not.toBeJsendString();
        });
        validJsend.error.forEach(function (jsend) {
          expect(jsend).not.toBeJsendString();
        });
        invalidJsend.success.forEach(function (jsend) {
          expect(stringifyIfJson(jsend)).not.toBeJsendString();
        });
        invalidJsend.fail.forEach(function (jsend) {
          expect(stringifyIfJson(jsend)).not.toBeJsendString();
        });
        invalidJsend.error.forEach(function (jsend) {
          expect(stringifyIfJson(jsend)).not.toBeJsendString();
        });
      });
    });
  });
});
