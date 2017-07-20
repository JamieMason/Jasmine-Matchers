const describeWhenNotArray = require('./lib/describeWhenNotArray');

describe('toBeArrayOfSize', () => {
  describe('when invoked', () => {
    describe('when subject is a true Array', () => {
      describe('when subject has the expected number of members', () => {
        it('should confirm', () => {
          let _undefined;
          expect([]).toBeArrayOfSize(0);
          expect([null]).toBeArrayOfSize(1);
          expect([false, false]).toBeArrayOfSize(2);
          expect([_undefined, _undefined]).toBeArrayOfSize(2);
        });
      });
      describe('when subject has an unexpected number of members', () => {
        it('should deny', () => {
          expect([]).not.toBeArrayOfSize(1);
          expect([null]).not.toBeArrayOfSize(0);
          expect([true, true]).not.toBeArrayOfSize(1);
        });
      });
    });
    describeWhenNotArray('toBeArrayOfSize');
  });
});
