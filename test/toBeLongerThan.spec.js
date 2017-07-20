describe('toBeLongerThan', () => {
  describe('when invoked', () => {
    describe('when the subject and comparison ARE both strings', () => {
      describe('when the subject IS longer than the comparision string', () => {
        it('should confirm', () => {
          expect('abc').toBeLongerThan('ab');
          expect('a').toBeLongerThan('');
        });
      });
      describe('when the subject is NOT longer than the comparision string', () => {
        it('should deny', () => {
          expect('ab').not.toBeLongerThan('abc');
          expect('').not.toBeLongerThan('a');
        });
      });
    });
    describe('when the subject and comparison are NOT both strings', () => {
      it('should deny (we are asserting the relative lengths of two strings)', () => {
        let _undefined;
        expect('truthy').not.toBeLongerThan(_undefined);
        expect(_undefined).not.toBeLongerThan('truthy');
        expect('').not.toBeLongerThan(_undefined);
        expect(_undefined).not.toBeLongerThan('');
      });
    });
  });
});
