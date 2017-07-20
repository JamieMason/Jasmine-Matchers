const getArgumentsObject = require('./getArgumentsObject');
const getArrayLikeObject = require('./getArrayLikeObject');

module.exports = function describeWhenNotArray(toBeArrayMemberName) {
  describe('when subject is not a true Array', () => {
    describe('when subject is Array-like', () => {
      it('should deny', () => {
        expect(getArgumentsObject()).not[toBeArrayMemberName]();
        expect(getArrayLikeObject()).not[toBeArrayMemberName]();
      });
    });
    describe('when subject is not Array-like', () => {
      it('should deny', () => {
        let _undefined;
        expect({}).not[toBeArrayMemberName]();
        expect(null).not[toBeArrayMemberName]();
        expect(_undefined).not[toBeArrayMemberName]();
        expect(true).not[toBeArrayMemberName]();
        expect(false).not[toBeArrayMemberName]();
        expect(Array).not[toBeArrayMemberName]();
      });
    });
  });
};
