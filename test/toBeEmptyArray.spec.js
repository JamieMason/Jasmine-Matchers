const describeWhenNotArray = require('./lib/describeWhenNotArray');

describe('toBeEmptyArray', () => {
  describe('when invoked', () => {
    describe('when subject is a true Array', () => {
      describe('when subject has members', () => {
        it('should confirm', () => {
          expect([]).toBeEmptyArray();
        });
      });
      describe('when subject has no members', () => {
        it('should deny', () => {
          expect([null]).not.toBeEmptyArray();
          expect(['']).not.toBeEmptyArray();
          expect([1]).not.toBeEmptyArray();
          expect([true]).not.toBeEmptyArray();
          expect([false]).not.toBeEmptyArray();
        });
      });
    });
    describeWhenNotArray('toBeEmptyArray');
  });
});
