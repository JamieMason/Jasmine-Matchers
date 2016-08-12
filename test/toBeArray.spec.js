// modules
var describeWhenNotArray = require('./lib/describeWhenNotArray');

// spec
describe('toBeArray', function () {
  describe('when invoked', function () {
    describe('when subject is a true Array', function () {
      it('should confirm', function () {
        expect([]).toBeArray();
        expect(new Array()).toBeArray();
      });
    });
    describeWhenNotArray('toBeArray');
  });
});
