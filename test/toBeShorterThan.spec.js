describe('toBeShorterThan', () => {
  describe('when invoked', () => {
    describe('when the subject and comparison ARE both strings', () => {
      describe('when the subject IS shorter than the comparision string', () => {
        it('should confirm', () => {
          expect('ab').toBeShorterThan('abc');
          expect('').toBeShorterThan('a');
        });
      });
      describe('when the subject is NOT shorter than the comparision string', () => {
        it('should deny', () => {
          expect('abc').not.toBeShorterThan('ab');
          expect('a').not.toBeShorterThan('');
        });
      });
    });
    describe('when the subject and comparison are NOT both strings', () => {
      it('should deny (we are asserting the relative lengths of two strings)', () => {
        let _undefined;
        expect('truthy').not.toBeShorterThan(_undefined);
        expect(_undefined).not.toBeShorterThan('truthy');
        expect('').not.toBeShorterThan(_undefined);
        expect(_undefined).not.toBeShorterThan('');
      });
    });
  });
});
