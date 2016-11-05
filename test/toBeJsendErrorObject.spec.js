var jsendSamples = require('./lib/jsendSampleData');
var validJsend = jsendSamples.valid;
var invalidJsend = jsendSamples.invalid;

// spec
describe('toBeJsendErrorObject', function () {
  describe('when invoked', function () {
    describe('when subject IS a JSEND error Object', function () {
      it('should confirm', function () {
        for (var i in validJsend.error) {
          expect(validJsend.error[i]).toBeJsendErrorObject();
        }
      });
    });
    describe('when subject is NOT a JSEND error Object', function () {
      it('should deny', function () {
        for (var i in invalidJsend.success) {
          expect(invalidJsend.success[i]).not.toBeJsendErrorObject();
        }
        for (var i in invalidJsend.fail) {
          expect(invalidJsend.fail[i]).not.toBeJsendErrorObject();
        }
        for (var i in invalidJsend.error) {
          expect(invalidJsend.error[i]).not.toBeJsendErrorObject();
        }
        for (var i in validJsend.fail) {
          expect(validJsend.fail[i]).not.toBeJsendErrorObject();
        }
        for (var i in validJsend.success) {
          expect(validJsend.success[i]).not.toBeJsendErrorObject();
        }
      });
    });
  });
});
