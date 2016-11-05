var jsendSamples = require('./lib/jsendSampleData');
var validJsend = jsendSamples.valid;
var invalidJsend = jsendSamples.invalid;

function stringifyIfJson(obj) {
  try {
    return JSON.stringify(obj);
  } catch (err) {
    return '' + obj;
  }
}

// spec
describe('toBeJsendString', function () {
  describe('when invoked', function () {
    describe('when subject IS a JSEND Object', function () {
      it('should confirm', function () {
        for (var i in validJsend.success) {
          expect(JSON.stringify(validJsend.success[i])).toBeJsendString();
        }
        for (var i in validJsend.fail) {
          expect(JSON.stringify(validJsend.fail[i])).toBeJsendString();
        }
        for (var i in validJsend.error) {
          expect(JSON.stringify(validJsend.error[i])).toBeJsendString();
        }
      });
    });
    describe('when subject is NOT a JSEND Object', function () {
      it('should deny', function () {
        for (var i in validJsend.success) {
          expect(validJsend.success[i]).not.toBeJsendString();
        }
        for (var i in validJsend.fail) {
          expect(validJsend.fail[i]).not.toBeJsendString();
        }
        for (var i in validJsend.error) {
          expect(validJsend.error[i]).not.toBeJsendString();
        }
        for (var i in invalidJsend.success) {
          expect(stringifyIfJson(invalidJsend.success[i])).not.toBeJsendString();
        }
        for (var i in invalidJsend.fail) {
          expect(stringifyIfJson(invalidJsend.fail[i])).not.toBeJsendString();
        }
        for (var i in invalidJsend.error) {
          expect(stringifyIfJson(invalidJsend.error[i])).not.toBeJsendString();
        }
      });
    });
  });
});
