const describeWhenNotArray = require('./lib/describeWhenNotArray');

describe('toBeNonEmptyArray', () => {
  describe('when invoked', () => {
    describe('when subject is a true Array', () => {
      describe('when subject has members', () => {
        it('should confirm', () => {
          let _undefined;
          expect([null]).toBeNonEmptyArray();
          expect([_undefined]).toBeNonEmptyArray();
          expect(['']).toBeNonEmptyArray();
        });
      });
      describe('when subject has no members', () => {
        it('should deny', () => {
          expect([]).not.toBeNonEmptyArray();
        });
      });
    });
    describeWhenNotArray('toBeNonEmptyArray');
  });
});
