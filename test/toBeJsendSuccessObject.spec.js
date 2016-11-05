var jsendSamples = require('./lib/jsendSampleData');
var validJsend = jsendSamples.valid;
var invalidJsend = jsendSamples.invalid;

// spec
describe('toBeJsendSuccessObject', function () {
  describe('when invoked', function () {
    describe('when subject IS a JSEND success Object', function () {
      it('should confirm', function () {
        for (var i in validJsend.success) {
          expect(validJsend.success[i]).toBeJsendSuccessObject();
        }
      });
    });
    describe('when subject is NOT a JSEND success Object', function () {
      it('should deny', function () {
        for (var i in invalidJsend.success) {
          expect(invalidJsend.success[i]).not.toBeJsendSuccessObject();
        }
        for (var i in invalidJsend.fail) {
          expect(invalidJsend.fail[i]).not.toBeJsendSuccessObject();
        }
        for (var i in invalidJsend.error) {
          expect(invalidJsend.error[i]).not.toBeJsendSuccessObject();
        }
        for (var i in validJsend.fail) {
          expect(validJsend.fail[i]).not.toBeJsendSuccessObject();
        }
        for (var i in validJsend.error) {
          expect(validJsend.error[i]).not.toBeJsendSuccessObject();
        }
      });
    });
  });
});
