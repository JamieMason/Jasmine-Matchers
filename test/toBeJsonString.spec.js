describe('toBeJsonString', () => {
  describe('when invoked', () => {
    describe('when subject IS a string of parseable JSON', () => {
      it('should confirm', () => {
        expect('{}').toBeJsonString();
        expect('[]').toBeJsonString();
        expect('[1]').toBeJsonString();
      });
    });
    describe('when subject is NOT a string of parseable JSON', () => {
      it('should deny', () => {
        let _undefined;
        expect('[1,]').not.toBeJsonString();
        expect('<>').not.toBeJsonString();
        expect(null).not.toBeJsonString();
        expect('').not.toBeJsonString();
        expect(_undefined).not.toBeJsonString();
      });
    });
  });
});
