var jsendSamples = require('./lib/jsendSampleData');
var validJsend = jsendSamples.valid;
var invalidJsend = jsendSamples.invalid;

function stringifyIfJson (obj) {
  try {
    return JSON.stringify(obj);
  } catch (err) {
    return '' + obj;
  }
}

// spec
describe('toBeJsendErrorString', function () {
  describe('when invoked', function () {
    describe('when subject IS a JSEND error Object', function () {
      it('should confirm', function () {
        for (var i in validJsend.error) {
          expect(JSON.stringify(validJsend.error[i])).toBeJsendErrorString();
        }
      });
    });
    describe('when subject is NOT a JSEND error Object', function () {
      it('should deny', function () {
        for (var i in validJsend.error) {
          expect(validJsend.error[i]).not.toBeJsendErrorString();
        }
        for (var i in invalidJsend.success) {
          expect(stringifyIfJson(invalidJsend.success[i])).not.toBeJsendErrorString();
        }
        for (var i in invalidJsend.fail) {
          expect(stringifyIfJson(invalidJsend.fail[i])).not.toBeJsendErrorString();
        }
        for (var i in invalidJsend.error) {
          expect(stringifyIfJson(invalidJsend.error[i])).not.toBeJsendErrorString();
        }
        for (var i in validJsend.fail) {
          expect(JSON.stringify(validJsend.fail[i])).not.toBeJsendErrorString();
        }
        for (var i in validJsend.success) {
          expect(JSON.stringify(validJsend.success[i])).not.toBeJsendErrorString();
        }
      });
    });
  });
});
