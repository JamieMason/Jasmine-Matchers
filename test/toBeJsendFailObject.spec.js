var jsendSamples = require('./lib/jsendSampleData');
var validJsend = jsendSamples.valid;
var invalidJsend = jsendSamples.invalid;

// spec
describe('toBeJsendFailObject', function () {
  describe('when invoked', function () {
    describe('when subject IS a JSEND fail Object', function () {
      it('should confirm', function () {
        for (var i in validJsend.fail) {
          expect(validJsend.fail[i]).toBeJsendFailObject();
        }
      });
    });
    describe('when subject is NOT a JSEND fail Object', function () {
      it('should deny', function () {
        for (var i in invalidJsend.success) {
          expect(invalidJsend.success[i]).not.toBeJsendFailObject();
        }
        for (var i in invalidJsend.fail) {
          expect(invalidJsend.fail[i]).not.toBeJsendFailObject();
        }
        for (var i in invalidJsend.error) {
          expect(invalidJsend.error[i]).not.toBeJsendFailObject();
        }
        for (var i in validJsend.success) {
          expect(validJsend.success[i]).not.toBeJsendFailObject();
        }
        for (var i in validJsend.error) {
          expect(validJsend.error[i]).not.toBeJsendFailObject();
        }
      });
    });
  });
});
