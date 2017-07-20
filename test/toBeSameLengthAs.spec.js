describe('toBeSameLengthAs', () => {
  describe('when invoked', () => {
    describe('when the subject and comparison ARE both strings', () => {
      describe('when the subject IS the same length as the comparision string', () => {
        it('should confirm', () => {
          expect('ab').toBeSameLengthAs('ab');
        });
      });
      describe('when the subject is NOT the same length as the comparision string', () => {
        it('should deny', () => {
          expect('abc').not.toBeSameLengthAs('ab');
          expect('a').not.toBeSameLengthAs('');
          expect('').not.toBeSameLengthAs('a');
        });
      });
    });
    describe('when the subject and comparison are NOT both strings', () => {
      it('should deny (we are asserting the relative lengths of two strings)', () => {
        let _undefined;
        expect('truthy').not.toBeSameLengthAs(_undefined);
        expect(_undefined).not.toBeSameLengthAs('truthy');
        expect('').not.toBeSameLengthAs(_undefined);
        expect(_undefined).not.toBeSameLengthAs('');
      });
    });
  });
});
